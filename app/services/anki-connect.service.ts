import { Service } from "./service";

type Actions =
  | "deckNames"
  | "deckNamesAndIds"
  | "createDeck"
  | "modelNames"
  | "modelNamesAndIds"
  | "createModel"
  | "addNote";
type AnkiResponse<T> = { result: T; error: string | null };

type DeckNamesResponse = string[];
type DeckNamesAndIdsResponse = Record<string, number>;
type CreateDeckResponse = number;

type ModelNamesResponse = string[];
type ModelNamesAndIdsResponse = Record<string, number>;

type CreateModelParams = {
  modelName: string;
  inOrderFields: string[];
  css: string;
  isCloze: boolean;
  cardTemplates: {
    Name: string;
    Front: string;
    Back: string;
  }[];
};
type CreateModelResponse = {
  sortf: number;
  did: number;
  latexPre: string;
  latexPost: string;
  mod: number;
  usn: number;
  vers: unknown[];
  type: number;
  css: string;
  name: string;
  flds: {
    name: string;
    ord: number;
    sicky: boolean;
    rtl: boolean;
    font: string;
    size: number;
    media: unknown[];
  }[];
  tmpls: {
    name: string;
    ord: number;
    qfmt: string;
    afmt: string;
    did: number;
    bqfmt: string;
    bafmt: string;
  }[];
  tags: string[];
  id: number;
  req: unknown[];
};

type Media = {
  url: string;
  filename: string;
  skipHash: string;
  fields: string[];
};
type CreateNoteParams = {
  deckName: string;
  modelName: string;
  fields: Record<string, string>;
  options: {
    allowDuplicate: boolean;
    duplicateScope: "deck" | "collection";
    duplicateScopeOptions: {
      deckName: string;
      checkChildren: boolean;
      checkAllModels: boolean;
    };
    tags: string[];
    audio: Media[];
    video: Media[];
    picture: Media[];
  };
};

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

  /**
   * Get the names of all models in the Anki collection.
   * @returns {Promise<ModelNamesResponse>} A list of model names.
   */
  public async modelNames(): Promise<ModelNamesResponse> {
    return this.invoke<ModelNamesResponse>("modelNames");
  }

  /**
   * Get the names and IDs of all models in the Anki collection.
   * @returns {Promise<ModelNamesAndIdsResponse>} A map of model names to model IDs.
   */
  public async modelNamesAndIds(): Promise<ModelNamesAndIdsResponse> {
    return this.invoke<ModelNamesAndIdsResponse>("modelNamesAndIds");
  }

  /**
   * Create a new model in the Anki collection.
   * @param {CreateModelParams} params The parameters for the new model.
   * @returns {Promise<CreateModelResponse>} The details of the new model.
   */
  public async createModel(
    params: CreateModelParams
  ): Promise<CreateModelResponse> {
    return this.invoke<CreateModelResponse>("createModel", params);
  }

  /**
   * Add a new note to the Anki collection.
   * @param {CreateNoteParams} params The parameters for the new note.
   * @returns {Promise<number>} The ID of the new note.
   */
  public async addNote(params: CreateNoteParams): Promise<number> {
    return this.invoke<number>("addNote", { note: params });
  }
}
