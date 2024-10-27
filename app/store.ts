import { create } from "zustand";

export interface Card {
  id: number;
  image: string;
  kana: string;
  kanji: string;
  translation: string;
}

interface IStore {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

export const Store = create<IStore>((set) => ({
  cards: [],
  setCards: (cards: Card[]) => set({ cards }),
}));

export const useStore = (): [Card[], (cards: Card[]) => void] => {
  return [Store((state) => state.cards), Store((state) => state.setCards)];
};
