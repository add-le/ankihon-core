export function getSpeech(): Promise<SpeechSynthesisVoice[]> {
  return new Promise(function (resolve) {
    const synth = window.speechSynthesis;
    const id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
}
