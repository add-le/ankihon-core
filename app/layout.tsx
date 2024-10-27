import "./globals.css";
import Init from "./init";

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
