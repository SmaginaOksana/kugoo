import { Jost, Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  subsets: ["latin"],
});

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const sfText = localFont({
  src: [
    {
      path: "./localFonts/SF_Text/SFProText-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./localFonts/SF_Text/SFProText-Heavy.ttf",
      weight: "900",
      style: "black",
    },
    {
      path: "./localFonts/SF_Text/SFProText-Semibold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
});

const sfDisplay = localFont({
  src: "./localFonts/SF_Display/SF-Pro-Display-Regular.otf",
});

export { roboto, jost, sfText, sfDisplay };
