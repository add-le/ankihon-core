"use client";

import { useRef, useState } from "react";
import "./styles.css";

import { Store } from "@/app/store";
import Flashcard from "@/app/ui/flashcard";
import { Plus, Volume2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { capitalize } from "radash";

export default function Learn() {
  async function handleReadKanji(kanji: string): Promise<void> {
    const utterThis = new SpeechSynthesisUtterance(kanji);
    utterThis.voice = Store.japVoices[0];
    window.speechSynthesis.speak(utterThis);
  }

  const initialCards = [
    {
      translation: "love",
      kanji: "愛",
      kana: "あい",
      image: "https://imgs.duocards.com/flatsSvg/2913124.svg",
    },
    {
      translation: "train",
      kanji: "電車",
      kana: "でんしゃ",
      image: "https://imgs.duocards.com/flatsSvg/3324675.svg",
    },
    {
      translation: "cat",
      kanji: "猫",
      kana: "ねこ",
      image: "https://imgs.duocards.com/flatsSvg/763724.svg",
    },
    {
      translation: "dog",
      kanji: "犬",
      kana: "いぬ",
      image: "https://imgs.duocards.com/flatsSvg/616408.svg",
    },
    {
      translation: "book",
      kanji: "本",
      kana: "ほん",
      image: "https://imgs.duocards.com/flatsSvg/167755.svg",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
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

  function handleTouchEnd(): void {
    if (!touchStart || !touchEnd || !showAnswer) return;
    const swipeDistance = touchStart - touchEnd;

    // If swipe distance is large enough, it's considered a swipe
    if (swipeDistance > 100) {
      handleSwipe("left");
      setTransitionDuration("0s");
      setShowAnswer(false);
    } else if (swipeDistance < -100) {
      handleSwipe("right");
      setTransitionDuration("0s");
      setShowAnswer(false);
    }

    // Reset touch start and end
    setTouchStart(0);
    setTouchEnd(0);
  }

  function handleSwipe(direction: "left" | "right"): void {
    if (["left", "right"].includes(direction))
      setCurrentIndex(currentIndex - 1);
  }

  function handleClick(): void {
    setTransitionDuration("0.6s");
    if (!showAnswer) handleReadKanji(cards[currentIndex].kanji);
    setShowAnswer(true);
  }

  return (
    <div className="h-dvh w-dvw">
      <div className="flex justify-center h-full items-center relative">
        {cards.map((card, index) => (
          <div
            className={`card ${index === currentIndex ? "active" : ""} h-[75%]`}
            key={card.translation}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={index === currentIndex ? cardRef : null}
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
                    <Image
                      width={100}
                      height={100}
                      alt="lost"
                      src={card.image}
                    />
                    <p className="font-bold text-4xl text-zinc-50">
                      {capitalize(card.translation)}
                    </p>
                  </Flashcard>
                </div>
                <div className="h-full w-full absolute backface-hidden transform rotate-y-180">
                  <Flashcard className="h-full w-full flex flex-col items-center justify-center">
                    <Image
                      width={100}
                      height={100}
                      alt="lost"
                      src={card.image}
                    />

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
      </div>

      <div className="absolute right-0 bottom-0 m-4">
        <div className="h-11 w-11">
          <Link href="/main/card">
            <khk-button variant="outline" full shape="circular">
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
