import { AnkiConnectService } from "./services/anki-connect.service";
import { TranslateService } from "./services/translate.service";

export interface IShare {
  japVoices: SpeechSynthesisVoice[];
  services: {
    ankiConnect: AnkiConnectService;
    translate: TranslateService;
  };
}

export const Share: IShare = {
  japVoices: [],
  services: {
    ankiConnect: new AnkiConnectService(),
    translate: new TranslateService(),
  },
};
