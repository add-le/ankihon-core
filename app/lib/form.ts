export class ExtendedFormData extends FormData {
  public constructor(form?: HTMLFormElement, submitter?: HTMLElement | null) {
    super(form, submitter);
  }

  public json<K extends string>(): Record<K, unknown> {
    const object: Record<string, unknown> = {};
    this.forEach((value, key) => (object[key] = value));
    return object;
  }
}
