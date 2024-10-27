import type { CardsInfoResponse } from "../services/anki-connect.service";
import type { Card } from "../store";

export type CardFields = "Translation" | "Kanji" | "Kana" | "Image";
export function toCard(cards: CardsInfoResponse<CardFields>): Card[] {
  return Object.values(cards)
    .sort((a, b) => a.due - b.due)
    .map((card) => {
      return {
        id: card.cardId,
        translation: card.fields.Translation?.value,
        kanji: card.fields.Kanji?.value,
        kana: card.fields.Kana?.value,
        image: card.fields.Image?.value,
      };
    });
}
