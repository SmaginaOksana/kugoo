export interface IProductsFields {
  status: string;
  image: string;
  productName: string;
  accumulator: string;
  power: string;
  speedometer: string;
  timer: string;
  oldPrice: number;
  newPrice: number;
}

export enum statusOfProduct {
  "hit" = "ХИТ",
  "new" = "Новинка",
  "none" = "",
}

export const navButtons = [
  "Хиты продаж",
  "Для города",
  "Для взрослых",
  "Для детей",
];
