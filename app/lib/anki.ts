import { Store } from "../store";

const ankihonDeckName = "Ankihon: Master Japanese, One Flashcard at a Time!";

export async function isAnkihonDeckPresent(): Promise<boolean> {
  const response = await Store.services.ankiConnect.deckNames();
  return response.includes(ankihonDeckName);
}

export async function createAnkihonDeck(): Promise<number> {
  return await Store.services.ankiConnect.createDeck(ankihonDeckName);
}

export async function getAnkihonDeck(): Promise<number> {
  const response = await Store.services.ankiConnect.deckNamesAndIds();

  if (ankihonDeckName in response) {
    return response[ankihonDeckName];
  }

  return await createAnkihonDeck();
}
