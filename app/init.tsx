"use client";

import "@add-le/ankihon-kohaku";
import { useEffect } from "react";
import { getAnkihonDeck } from "./lib/anki";
import { getSpeech } from "./lib/speech";
import { Store } from "./store";

export default function Init() {
  useEffect(() => {
    async function init() {
      // Fetch the ankihon deck from anki
      const ankihonDeckId = await getAnkihonDeck();
      console.log("logger", ankihonDeckId);

      const voices = await getSpeech();
      const japVoices = voices.filter((voice) => voice.lang === "ja-JP");
      console.log("logger", japVoices);
      Store.japVoices = japVoices;
    }

    init();
  }, []);

  return null;
}
