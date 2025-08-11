import telegramIcon from "@/assets/social/telegramIcon.svg";
import whatsappIcon from "@/assets/social/whatsappIcon.svg";
import viberIcon from "@/assets/social/viberIcon.svg";
import heartIcon from "@/assets/heartIcon.svg";
import balanceIcon from "@/assets/balanceIcon.svg";
import shoppingCartIcon from "@/assets/shoppingCartIcon.svg";

export const messengersButtons = [
  {
    icon: viberIcon,
    activeColor: "var(--color-pink-viber)",
    title: "viber",
  },
  {
    icon: whatsappIcon,
    activeColor: "var(--color-green-whatsapp)",
    title: "whatsapp",
  },
  {
    icon: telegramIcon,
    activeColor: "var(--color-blue-telegram)",
    title: "telegram",
  },
];

export const userButtons = [
  {
    icon: balanceIcon,
  },
  {
    icon: heartIcon,
  },
  {
    icon: shoppingCartIcon,
    text: "Корзина",
  },
];

export const dropdown = ["Везде", "", "", ""];

export const links = [
  { path: "#", link: "О магазине" },
  { path: "#", link: "Доставка и оплата", text: "Доступна рассрочка" },
  { path: "#", link: "Тест-драйв" },
  { path: "#", link: "Блог" },
  { path: "#", link: "Контакты" },
  { path: "#", link: "Акции", text: "%" },
];
