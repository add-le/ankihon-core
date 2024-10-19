import { Metadata } from "next";
import "./globals.css";
import Init from "./init";

export const metadata: Metadata = {
  manifest: "/manifest.json",
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
