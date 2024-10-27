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
      <head>
        <link
          rel="manifest"
          href={`${basePath}/manifest.webmanifest`}
          crossOrigin="use-credentials"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
