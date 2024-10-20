import translate from "google-translate-api-browser";
import type { TranslationResult } from "google-translate-api-browser/dest/types/TranslationResult";
import { Service } from "./service";

export class TranslateService extends Service {
  public constructor() {
    super();
  }

  /**
   * Translates text from English to Japanese or vice versa.
   * @param {string} text The text to translate.
   * @param {boolean} [toJapanese=false] Whether to translate to Japanese. Defaults to false. If false, translates to English.
   * @returns {Promise<TranslationResult>} The translation result.
   */
  public async translate(
    text: string,
    toJapanese: boolean = false
  ): Promise<TranslationResult> {
    return await translate(text, {
      from: toJapanese ? "en" : "ja",
      to: toJapanese ? "ja" : "en",
      corsUrl: "http://cors-anywhere.herokuapp.com/",
    });
  }
}
