export abstract class Service {
  protected constructor() {}

  protected async fetch<R = string | Record<string, unknown>>(
    input: string,
    init?: RequestInit
  ): Promise<R> {
    const response = await fetch(input, init);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    if (response.headers.get("Content-Type")?.includes("json")) {
      return await response.json();
    }

    return (await response.text()) as R;
  }
}
