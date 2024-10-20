"use client";

import { ExtendedFormData } from "@/app/lib/form";
import { Store } from "@/app/store";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { debounce } from "radash";
import React, { useRef } from "react";

export default function Card() {
  const frontInput = useRef<HTMLKhkTextfieldElement>();
  const backInput = useRef<HTMLKhkTextfieldElement>();
  const submitButton = useRef<HTMLKhkButtonElement>();

  let oldFront: string = "";
  let oldBack: string = "";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new ExtendedFormData(event.target as HTMLFormElement);

    console.log("logger ici", formData.json());

    for (const p of formData) {
      console.log(`logger `, p);
    }
  }

  async function handleTranslateSide(
    input: HTMLInputElement,
    side: "front" | "back"
  ): Promise<void> {
    // If the input is empty, return
    if (!input.value) return;
    // If the input is the same as the previous one, return
    if (input.value.trim() === (side === "front" ? oldFront : oldBack)) return;
    if (side === "front") oldFront = input.value.trim();
    else oldBack = input.value.trim();
    // If the other side is not empty, return
    if (backInput.current?.value?.trim() && side === "front") return;
    if (frontInput.current?.value?.trim() && side === "back") return;

    const response = await Store.services.translate.translate(
      input.value,
      side === "back"
    );
    if (!response?.text) return;

    if (backInput.current && side === "front")
      backInput.current.value = response.text.trim();
    if (frontInput.current && side === "back")
      frontInput.current.value = response.text.trim();
    handleFormInput();
  }

  const handleFrontInputDebounced = debounce(
    { delay: 1000 },
    async (input: HTMLInputElement) => {
      await handleTranslateSide(input, "front");
    }
  );

  const handleBackInputDebounced = debounce(
    { delay: 1000 },
    async (input: HTMLInputElement) => {
      await handleTranslateSide(input, "back");
    }
  );

  function handleFrontInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    handleFrontInputDebounced(input);
  }

  function handleBackInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    handleBackInputDebounced(input);
  }

  function handleFormInput(): void {
    if (submitButton.current)
      submitButton.current.disabled =
        !frontInput.current?.value?.trim() || !backInput.current?.value?.trim();
  }

  return (
    <div className="m-4">
      <div className="h-12 w-12">
        <Link href="/main/learn">
          <khk-button variant="quiet" shape="circular" full>
            <ChevronLeft />
          </khk-button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Image
          width={100}
          height={100}
          src="/images/cards/placeholder.png"
          title="Designed by Freepik"
          alt="placeholder"
          priority
        />

        <form
          className="flex flex-col gap-3 w-full"
          onSubmit={handleSubmit}
          onInput={handleFormInput}
        >
          <khk-textfield
            ref={(input) => (frontInput.current = input)}
            required
            name="front"
            lang="ja"
            placeholder="Japanese"
            label="Japanese"
            onInput={handleFrontInput}
          />
          <khk-textfield
            required
            ref={(input) => (backInput.current = input)}
            name="back"
            lang="en"
            placeholder="English"
            label="English"
            onInput={handleBackInput}
          />
          <khk-textfield
            name="sample"
            lang="ja"
            placeholder="Example of usage (Japanese)"
            label="Example of usage (Japanese)"
          />

          <khk-button
            class="mt-2"
            ref={(button) => (submitButton.current = button)}
            full
            type="submit"
            disabled
          >
            SAVE
          </khk-button>
        </form>
      </div>
    </div>
  );
}
