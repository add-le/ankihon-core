"use client";

import { Store } from "@/app/store";
import Flashcard from "@/app/ui/flashcard";
import { Volume2 } from "lucide-react";
import Image from "next/image";

function handleReadKanji() {
  const utterThis = new SpeechSynthesisUtterance("私は男です。");
  utterThis.voice = Store.japVoices[0];
  window.speechSynthesis.speak(utterThis);
}

export default function Learn() {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center">
      <Flashcard className="z-10 flex flex-col items-center justify-center">
        <Image
          width={100}
          height={100}
          alt="lost"
          src="https://imgs.duocards.com/flatsSvg/2913124.svg"
        />
        <p className="p-3 text-zinc-300">Love</p>
        <div className="flex items-center relative -left-[22px]">
          <khk-button
            variant="quiet"
            suppressHydrationWarning
            full
            class="h-full"
            onClick={handleReadKanji}
          >
            <Volume2 size={18} />
          </khk-button>

          <p lang="ja" className="text-4xl text-zinc-50">
            愛
          </p>
        </div>
        <p lang="ja-Kana" className="p-1 text-sm text-zinc-400">
          あい
        </p>
      </Flashcard>
      <Flashcard className="absolute rotate-3 md:rotate-6" />
      <Flashcard className="absolute -rotate-3 md:-rotate-6" />
    </div>
  );
}
