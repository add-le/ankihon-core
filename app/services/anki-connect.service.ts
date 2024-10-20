import { Service } from "./service";

type Actions = "deckNames" | "deckNamesAndIds" | "createDeck";
type AnkiResponse<T> = { result: T; error: string | null };

type DeckNamesResponse = string[];
type DeckNamesAndIdsResponse = Record<string, number>;
type CreateDeckResponse = number;

export class AnkiConnectService extends Service {
  public constructor() {
    super();
  }

  private async invoke<T = unknown>(
    action: Actions,
    params?: Record<string, unknown>,
    key?: string,
    version: number = 6
  ): Promise<T> {
    const { result, error } = await this.fetch<AnkiResponse<T>>(
      "http://localhost:8765",
      {
        method: "POST",
        body: JSON.stringify({ action, params, key, version }),
      }
    );

    if (error) {
      throw new Error(error);
    }

    return result;
  }

  /**
   * Get the names of all decks in the Anki collection.
   * @returns {Promise<DeckNamesResponse>} A list of deck names.
   */
  public async deckNames(): Promise<DeckNamesResponse> {
    return this.invoke<DeckNamesResponse>("deckNames");
  }

  /**
   * Get the names and IDs of all decks in the Anki collection.
   * @returns {Promise<DeckNamesAndIdsResponse>} A map of deck names to deck IDs.
   */
  public async deckNamesAndIds(): Promise<DeckNamesAndIdsResponse> {
    return this.invoke<DeckNamesAndIdsResponse>("deckNamesAndIds");
  }

  /**
   * Create a new deck in the Anki collection.
   * @param {string} deck The name of the new deck.
   * @returns {Promise<CreateDeckResponse>} The ID of the new deck.
   */
  public async createDeck(deck: string): Promise<CreateDeckResponse> {
    return this.invoke<CreateDeckResponse>("createDeck", { deck });
  }
}
