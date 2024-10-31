import type { TranslationResult } from "google-translate-api-browser/dest/types/TranslationResult";
import { toHiragana } from "wanakana";
import { Share } from "../share";

const ankihonDeckName = "Ankihon: Master Japanese, One Flashcard at a Time!";
const ankihonModelName = "Ankihon";

export async function isAnkihonDeckPresent(): Promise<boolean> {
  const response = await Share.services.ankiConnect.deckNames();
  return response.includes(ankihonDeckName);
}

export async function createAnkihonDeck(): Promise<number> {
  return Share.services.ankiConnect.createDeck(ankihonDeckName);
}

export async function getAnkihonDeck(): Promise<number> {
  const response = await Share.services.ankiConnect.deckNamesAndIds();

  if (ankihonDeckName in response) {
    return response[ankihonDeckName];
  }

  return createAnkihonDeck();
}

export async function isAnkihonModelPresent(): Promise<boolean> {
  const response = await Share.services.ankiConnect.modelNames();
  return response.includes(ankihonModelName);
}

export async function createAnkihonModel(): Promise<number> {
  return (
    await Share.services.ankiConnect.createModel({
      modelName: ankihonModelName,
      inOrderFields: ["Translation", "Kanji", "Kana"],
      css: 'body,html{height:100%}.card{height:95%;display:flex;align-items:center;justify-content:center;font-family:arial;font-size:20px;text-align:center;color:#000;background-color:#fff}.translation_front{font-family:"Arial";font-size:24px;color:#fafafa;font-weight:700}.kana_back,.kanji_back,.translation_back{font-family:"Arial";font-size:16px;color:#d4d4d8;font-weight:700}.kana_back,.kanji_back{font-size:36px;color:#fafafa}.kana_back{font-size:14px;color:#a1a1a1}',
      isCloze: false,
      cardTemplates: [
        {
          Name: "Default Template",
          Front: '<div class="translation_front">{{Translation}}</div>',
          Back: '<div class="translation_back">{{Translation}}</div><div class="kanji_back">{{Kanji}}</div><div class="kana_back">{{Kana}}</div>',
        },
      ],
    })
  ).id;
}

export async function getAnkihonModel(): Promise<number> {
  const response = await Share.services.ankiConnect.modelNamesAndIds();

  if (ankihonModelName in response) {
    return response[ankihonModelName];
  }

  return createAnkihonModel();
}

type CreateNoteAnkihonParams = {
  sample?: string;
  translation?: TranslationResult;
};
export async function createNote(
  front: string,
  back: string,
  params?: CreateNoteAnkihonParams
): Promise<number> {
  return Share.services.ankiConnect.addNote({
    deckName: ankihonDeckName,
    modelName: ankihonModelName,
    fields: {
      Kana: params?.translation?.from?.text?.pronunciation
        ? toHiragana(params.translation.from.text.pronunciation)
        : "",
      Kanji: front,
      Translation: back,
    },
    options: {
      allowDuplicate: false,
      audio: [],
      duplicateScope: "deck",
      duplicateScopeOptions: {
        deckName: ankihonDeckName,
        checkChildren: false,
        checkAllModels: false,
      },
      picture: [],
      tags: ["Ankihon"],
      video: [],
    },
  });
}

export async function getAnkihonCardsDue() {
  const cards = await Share.services.ankiConnect.cardReviews({
    deck: ankihonDeckName,
    startID: 0,
  });

  if (!cards?.length) {
    return;
  }

  const formattedCards = [];
  for (const card of cards) {
    formattedCards.push(
      card.map((value, index) => (index === 0 ? new Date(value) : value))
    );
  }

  return formattedCards;
}

export async function getAnkihonCardsInfos(cardsIds: number[]) {
  return Share.services.ankiConnect.cardsInfo(cardsIds);
}

export async function getAnkihonNotesNeedLearn() {
  return Share.services.ankiConnect.findNotes(
    `deck:"${ankihonDeckName}" is:learn`
  );
}

export async function getAnkihonCardsNeedLearn() {
  return Share.services.ankiConnect.findCards(
    `deck:"${ankihonDeckName}" is:learn`
  );
}

export async function getAnkihonNotesInfos(notesIds: number[]) {
  return Share.services.ankiConnect.notesInfo(notesIds);
}

export async function answerAnkihonCard(
  cardId: number,
  success: "good" | "again"
) {
  return Share.services.ankiConnect.answerCards([
    {
      cardId,
      ease: success === "again" ? 1 : 3,
    },
  ]);
}
