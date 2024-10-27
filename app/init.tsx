"use client";

import "@add-le/ankihon-kohaku";
import { useEffect } from "react";
import {
  getAnkihonCardsInfos,
  getAnkihonCardsNeedLearn,
  getAnkihonDeck,
  getAnkihonModel,
  getAnkihonNotesInfos,
} from "./lib/anki";
import { toCard } from "./lib/card";
import { getSpeech } from "./lib/speech";
import { Share } from "./share";
import { Store } from "./store";

export default function Init() {
  const setCardsStore = Store((state) => state.setCards);

  useEffect(() => {
    async function init() {
      // Create the ankihon deck if it doesn't exist
      await getAnkihonDeck();
      // Create the ankihon model if it doesn't exist
      await getAnkihonModel();
      // Get the cards that need to be learned
      const cardsIdsNeedLearn = await getAnkihonCardsNeedLearn();
      // Get the cards infos
      const notes = await getAnkihonNotesInfos(cardsIdsNeedLearn);
      const cards = await getAnkihonCardsInfos(
        notes.map((note) => note.cards[0])
      );
      setCardsStore(toCard(cards));

      const voices = await getSpeech();
      const japVoices = voices.filter((voice) => voice.lang === "ja-JP");
      Share.japVoices = japVoices;
    }

    init();
  });

  return null;
}
