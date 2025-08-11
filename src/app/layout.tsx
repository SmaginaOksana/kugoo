import type { Metadata } from "next";
import { roboto, jost, sfText, sfDisplay } from "../styles/fonts/fonts";
import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

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
      <body
        className={`antialiased ${jost.variable} ${roboto.variable} ${sfDisplay.variable} ${sfText.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
