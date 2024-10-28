"use client";

import { answerAnkihonCard } from "@/app/lib/anki";
import { Share } from "@/app/share";
import { useStore } from "@/app/store";
import Flashcard from "@/app/ui/flashcard";
import { Plus, Volume2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { capitalize } from "radash";
import { useRef, useState } from "react";

export default function Learn() {
  const [useCardsStore, setCardsStore] = useStore();

  async function handleReadKanji(kanji: string): Promise<void> {
    const utterThis = new SpeechSynthesisUtterance(kanji);
    utterThis.voice = Share.japVoices[0];
    window.speechSynthesis.speak(utterThis);
  }

  const [showAnswer, setShowAnswer] = useState(false);
  const [touchEnd, setTouchEnd] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState("0.6s");

  const cardRef = useRef(null);

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>): void {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(cardId: number): void {
    if (!touchStart || !touchEnd || !showAnswer) return;
    const swipeDistance = touchStart - touchEnd;

    // If swipe distance is large enough, it's considered a swipe
    if (swipeDistance > 100) {
      handleSwipe("left", cardId);
      setTransitionDuration("0s");
      setShowAnswer(false);
    } else if (swipeDistance < -100) {
      handleSwipe("right", cardId);
      setTransitionDuration("0s");
      setShowAnswer(false);
    }

    // Reset touch start and end
    setTouchStart(0);
    setTouchEnd(0);
  }

  async function handleSwipe(
    direction: "left" | "right",
    cardId: number
  ): Promise<void> {
    if (["left", "right"].includes(direction)) {
      // Card is not known
      if (direction === "left") {
        await answerAnkihonCard(cardId, "again");
      }
      // Card is known
      if (direction === "right") {
        await answerAnkihonCard(cardId, "good");
      }
      // Remove the card from the deck
      setCardsStore(useCardsStore.slice(0, -1));
    }
  }

  function handleClick(): void {
    setTransitionDuration("0.6s");
    if (!showAnswer)
      handleReadKanji(useCardsStore[useCardsStore.length - 1].kanji);
    setShowAnswer(true);
  }

  return (
    <div className="h-dvh w-dvw">
      <div className="flex justify-center h-full items-center relative">
        {useCardsStore.map((card, index) => (
          <div
            className={`absolute w-72 max-w-[85dvw] h-[75%] bg-cover bg-center rounded-3xl shadow-2xl flex justify-center items-end text-zinc-50 text-2xl transition-transform ease-in-out duration-300 card ${
              index === useCardsStore.length - 1
                ? "z-50"
                : "scale-75 opacity-70"
            }`}
            key={card.translation}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => handleTouchEnd(card.id)}
            ref={index === useCardsStore.length - 1 ? cardRef : null}
          >
            <div
              className="h-full w-full perspective-1000"
              onClick={handleClick}
            >
              <div
                className={`transform-style-3d h-full w-full relative shadow-md text-center ${
                  showAnswer ? "transform rotate-y-180" : ""
                }`}
                style={{ transition: `transform ${transitionDuration} ease` }}
              >
                <div className="h-full w-full absolute backface-hidden">
                  <Flashcard className="h-full w-full flex flex-col items-center justify-center">
                    {card.image && (
                      <Image
                        width={100}
                        height={100}
                        alt="icon representing the card"
                        src={card.image}
                      />
                    )}
                    <p className="font-bold text-4xl text-zinc-50">
                      {capitalize(card.translation)}
                    </p>
                  </Flashcard>
                </div>
                <div className="h-full w-full absolute backface-hidden transform rotate-y-180">
                  <Flashcard className="h-full w-full flex flex-col items-center justify-center">
                    {card.image && (
                      <Image
                        width={100}
                        height={100}
                        alt="icon representing the card"
                        src={card.image}
                      />
                    )}
                    <p className="font-medium p-3 text-zinc-300">
                      {capitalize(card.translation)}
                    </p>
                    <div className="flex items-center relative -left-[22px]">
                      <khk-button
                        variant="quiet"
                        suppressHydrationWarning
                        full
                        class="h-full"
                        onClick={() => handleReadKanji(card.kanji)}
                      >
                        <Volume2 size={18} />
                      </khk-button>

                      <p lang="ja" className="font-bold text-4xl text-zinc-50">
                        {card.kanji}
                      </p>
                    </div>
                    <p
                      lang="ja-Kana"
                      className="font-bold p-1 text-sm text-zinc-400"
                    >
                      {card.kana}
                    </p>
                  </Flashcard>
                </div>
              </div>
            </div>
          </div>
        ))}
        {!useCardsStore.length && (
          <p className="m-8 font-medium">
            🎉 Congratulations! You have finished this deck for now.
          </p>
        )}
      </div>

      <div className="absolute right-0 bottom-0 m-4">
        <div className="h-11 w-11">
          <Link href="/main/card">
            <khk-button
              variant="outline"
              full
              shape="circular"
              class="flex h-full w-full"
            >
              <Plus />
            </khk-button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 m-2 left-0 right-0 w-fit ml-auto mr-auto">
        <p className="text-xs text-zinc-600">
          Icons designed by{" "}
          <a
            className="underline"
            href="https://www.freepik.com/"
            target="_blank"
          >
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
}
