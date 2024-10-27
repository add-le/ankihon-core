import Head from "next/head";
import "./globals.css";
import Init from "./init";
const {
  default: { basePath },
} = await import("../next.config.mjs");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Init />
      <Head>
        <link rel="manifest" href={`${basePath}/manifest.webmanifest`} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
