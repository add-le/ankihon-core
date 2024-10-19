import { kohaku } from "@add-le/ankihon-kohaku";

interface ReactSpecificAttributes {
  // React-specific Attributes
  defaultChecked?: boolean | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  suppressContentEditableWarning?: boolean | undefined;
  suppressHydrationWarning?: boolean | undefined;
}

type NextComponent<C> = {
  [K in keyof C]: C[K] &
    ReactSpecificAttributes & { [attribute: string]: unknown };
};

declare global {
  namespace JSX {
    interface IntrinsicElements
      extends NextComponent<kohaku.IntrinsicElements> {
      [tagName: string]: unknown;
    }
  }
}
