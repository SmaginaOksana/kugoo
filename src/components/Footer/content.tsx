import telegramIcon from "@/assets/social/telegramIcon.svg";
import telegramColorIcon from "@/assets/social/telegramColor.png";
import whatsappIcon from "@/assets/social/whatsappIcon.svg";
import viberIcon from "@/assets/social/viberIcon.svg";
import instagramColorIcon from "@/assets/social/instagramColor.png";
import vkColorIcon from "@/assets/social/vkColor.png";
import youtubeColorIcon from "@/assets/social/youtubeColor.png";
import googlePlayIcon from "@/assets/googlePlay.png";
import appleIcon from "@/assets/apple.png";
import googlePayIcon from "@/assets/waysToPay/googlePay.png";
import applePayIcon from "@/assets/waysToPay/applePay.png";
import visaIcon from "@/assets/waysToPay/visa.png";
import mastercardIcon from "@/assets/waysToPay/mastercard.png";
import maestroIcon from "@/assets/waysToPay/maestro.png";
import qiwiIcon from "@/assets/waysToPay/qiwi.png";
import webmoneyIcon from "@/assets/waysToPay/webmoney.png";

export const aboutShopLinks = [
  { path: "#", link: "Реквизиты" },
  { path: "#", link: "Политика конфиденциальности" },
];
export const links = [
  {
    title: "Каталог товаров",
    list: [
      {
        path: "#",
        link: "Электросамокаты",
      },
      {
        path: "#",
        link: "Электроскутеры",
      },
      {
        path: "#",
        link: "Электровелосипеды",
      },
      {
        path: "#",
        link: "Электровелосипеды",
      },
    ],
  },
  {
    title: "Покупателям",
    list: [
      {
        path: "#",
        link: "Сервисный центр",
      },
      {
        path: "#",
        link: "Доставка и оплата",
      },
      {
        path: "#",
        link: "Рассрочка",
      },
      {
        path: "#",
        link: "Тест-драйв",
      },
      {
        path: "#",
        link: "Блог",
      },
      {
        path: "#",
        link: "Сотрудничество",
      },
      {
        path: "#",
        link: "Контакты",
      },
      {
        path: "#",
        link: "Акции",
      },
    ],
  },
];

export const contactsFirstBlock = [
  {
    title: "Call-центр",
    contact: "+7 (800) 505-54-61",
    openHours: "Пн-Вс 10:00 - 20:00",
  },
  {
    title: "Сервисный центр",
    contact: "+7 (499) 350-76-92",
    openHours: "Пн-Вс 10:00 - 20:00",
  },
];

export const contactsSecondBlock = [
  {
    title: "Магазин в Москве",
    adress: "ул. Ткацкая, 5 стр. 16",
    contact: "+7 (499) 406 15 87",
  },
  {
    title: "Магазин в Санкт-Петербурге",
    adress: "ул. Фрунзе, 2",
    contact: "+7 (499) 406 15 87",
  },
  {
    title: "Магазин в Краснодаре",
    adress: "ул. Восточно-Кругликовская, 86",
    contact: "+ 7 (800) 505 54 61",
  },
];

export const buttonsForPurchase = [
  {
    icon: googlePlayIcon,
    title: "ДОСТУПНО НА",
    text: "Google Play",
  },
  {
    icon: appleIcon,
    title: "Загрузите в",
    text: "App Store",
  },
];

export const buttonsSocialLinks = [
  {
    icon: vkColorIcon,
    title: "Вконтакте",
    text: 3300,
  },
  {
    icon: instagramColorIcon,
    title: "Instagram",
    text: 10602,
  },
  {
    icon: youtubeColorIcon,
    title: "YouTube",
    text: 3603,
  },
  {
    icon: telegramColorIcon,
    title: "Telegram",
    text: 432,
  },
];

export const waysToPayButtons = [
  {
    icon: googlePayIcon,
    title: "googlePay",
  },
  {
    icon: applePayIcon,
    title: "applePay",
  },
  {
    icon: visaIcon,
    title: "visa",
  },
  {
    icon: mastercardIcon,
    title: "mastercard",
  },
  {
    icon: maestroIcon,
    title: "maestro",
  },
  {
    icon: webmoneyIcon,
    title: "webmoney",
  },
  {
    icon: qiwiIcon,
    title: "qiwi",
  },
];

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
