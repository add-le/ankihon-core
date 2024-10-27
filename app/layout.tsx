import type { Metadata } from "next";
import "./globals.css";
import Init from "./init";
const {
  default: { basePath },
} = await import("../next.config.mjs");

export const metadata: Metadata = {
  manifest: `${basePath}/manifest.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Init />
      <body>{children}</body>
    </html>
  );
}
