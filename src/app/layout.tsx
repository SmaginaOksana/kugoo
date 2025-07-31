import type { Metadata } from "next";
import { roboto, jost, sfText, sfDisplay } from "../styles/fonts/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Kugoo",
  description: "Интернет-магазин электросамокатов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`antialiased ${jost.className}`}>{children}</body>
    </html>
  );
}
