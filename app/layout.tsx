import type { Metadata } from "next";
import nextConfig from "../next.config.mjs";
import "./globals.css";
import Init from "./init";

export const metadata: Metadata = {
  manifest: `${nextConfig.basePath}/manifest.json`,
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
