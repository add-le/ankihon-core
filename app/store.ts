import { AnkiConnectService } from "./services/anki-connect.service";
import { TranslateService } from "./services/translate.service";

export interface IStore {
  japVoices: SpeechSynthesisVoice[];
  services: {
    ankiConnect: AnkiConnectService;
    translate: TranslateService;
  };
}

export const Store: IStore = {
  japVoices: [],
  services: {
    ankiConnect: new AnkiConnectService(),
    translate: new TranslateService(),
  },
};
