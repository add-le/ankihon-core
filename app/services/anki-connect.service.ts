import { Service } from "./service";

type Actions =
  | "addNote"
  | "answerCards"
  | "cardReviews"
  | "cardsInfo"
  | "createDeck"
  | "createModel"
  | "deckNames"
  | "deckNamesAndIds"
  | "findCards"
  | "findNotes"
  | "getReviewsOfCards"
  | "modelNames"
  | "modelNamesAndIds"
  | "notesInfo";
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

type CardReviewsParams = {
  deck: string;
  startID: number;
};

type CardReviewsResponse = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
][];

type GetReviewsOfCardsParams = string[];
type GetReviewsOfCardsResponse = Record<
  string,
  {
    id: string;
    usn: number;
    ease: number;
    ivl: number;
    lastIvl: number;
    factor: number;
    time: number;
    type: number;
  }[]
>;

type CardsInfoParams = number[];
export type CardsInfoResponse<Fields extends string> = Record<
  string,
  {
    answer: string;
    question: string;
    deckName: string;
    modelName: string;
    fieldOrder: number;
    fields: Record<
      Fields,
      {
        value: string;
        order: number;
      }
    >;
    css: string;
    cardId: number;
    interval: number;
    note: number;
    ord: number;
    type: number;
    queue: number;
    due: number;
    reps: number;
    lapses: number;
    left: number;
    mod: number;
  }
>;

type FindNotesParams = string;
type FindNotesResponse = number[];

type NotesInfoParams = number[];
type NotesInfoResponse<Fields extends string> = {
  noteId: number;
  profile: string;
  modelName: string;
  tags: string[];
  fields: Record<
    Fields,
    {
      value: string;
      order: number;
    }
  >;
  mod: number;
  cards: number[];
}[];

type AnswerCardsParams = {
  cardId: number;
  ease: 1 | 2 | 3 | 4;
}[];
type AnswerCardsResponse = boolean[];

type FindCardsParams = string;
type FindCardsResponse = number[];

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

  /**
   * Get the reviews for a deck in the Anki collection.
   * @param {CardReviewsParams} params The parameters for the card reviews.
   * @returns {Promise<CardReviewsResponse>} A list of card reviews.
   */
  public async cardReviews(
    params: CardReviewsParams
  ): Promise<CardReviewsResponse> {
    return this.invoke<CardReviewsResponse>("cardReviews", params);
  }

  /**
   * Get the reviews for a list of cards in the Anki collection.
   * @param {GetReviewsOfCardsParams} params The list of card IDs.
   * @returns {Promise<GetReviewsOfCardsResponse>} A map of card IDs to card reviews.
   */
  public async getReviewsOfCards(
    params: GetReviewsOfCardsParams
  ): Promise<GetReviewsOfCardsResponse> {
    return this.invoke<GetReviewsOfCardsResponse>("getReviewsOfCards", {
      cards: params,
    });
  }

  /**
   * Get information about a list of cards in the Anki collection.
   * @param {CardsInfoParams} params The list of card IDs.
   * @returns {Promise<CardsInfoResponse<Fields>>} A map of card IDs to card information.
   */
  public async cardsInfo<Fields extends string>(
    params: CardsInfoParams
  ): Promise<CardsInfoResponse<Fields>> {
    return this.invoke<CardsInfoResponse<Fields>>("cardsInfo", {
      cards: params,
    });
  }

  /**
   * Find notes in the Anki collection that match a query.
   * @param {FindNotesParams} query The query to match.
   * @returns {Promise<FindNotesResponse>} A list of note IDs.
   */
  public async findNotes(query: FindNotesParams): Promise<FindNotesResponse> {
    return this.invoke<FindNotesResponse>("findNotes", { query });
  }

  /**
   * Get information about a list of notes in the Anki collection.
   * @param {NotesInfoParams} params The list of note IDs.
   * @returns {Promise<NotesInfoResponse<Fields>>} A list of note information.
   */
  public async notesInfo<Fields extends string>(
    params: NotesInfoParams
  ): Promise<NotesInfoResponse<Fields>> {
    return this.invoke<NotesInfoResponse<Fields>>("notesInfo", {
      notes: params,
    });
  }

  /**
   * Answer a list of cards in the Anki collection.
   * @param {AnswerCardsParams} params The list of card answers.
   * @returns {Promise<AnswerCardsResponse>} A list of boolean values indicating success.
   */
  public async answerCards(
    params: AnswerCardsParams
  ): Promise<AnswerCardsResponse> {
    return this.invoke<AnswerCardsResponse>("answerCards", { answers: params });
  }

  /**
   * Find cards in the Anki collection that match a query.
   * @param {FindCardsParams} query The query to match.
   * @returns {Promise<FindCardsResponse>} A list of card IDs.
   */
  public async findCards(query: FindCardsParams): Promise<FindCardsResponse> {
    return this.invoke<FindCardsResponse>("findCards", { query });
  }
}
