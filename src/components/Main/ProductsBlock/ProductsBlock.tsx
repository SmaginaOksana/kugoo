"use client";

import { useState } from "react";

import { CardProduct } from "@/components/Main/ProductsBlock/components/CardProduct/CardProduct";
import { IProductsFields } from "@/components/Main/ProductsBlock/content";
import { Button } from "@/components/common/Button/Button";
import { NavButtons } from "@/components/Main/ProductsBlock/components/NavButtons/NavButtons";

const array: IProductsFields[] = [
  {
    status: "ХИТ",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
  {
    status: "Новинка",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
  {
    status: "ХИТ",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
  {
    status: "",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
  {
    status: "Новинка",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
  {
    status: "ХИТ",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
  {
    status: "",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
  {
    status: "ХИТ",
    image: "/products/electric_scooters/electric_scooters_1.png",
    productName: "Kugoo Kirin M4",
    accumulator: "2000 mAh",
    power: "1,2 л.с.",
    speedometer: "60 км/ч",
    timer: "5 часов",
    oldPrice: 39900,
    newPrice: 29900,
  },
];

export function ProductsBlock() {
  const [activeTab, setActiveTab] = useState("Хиты продаж");

  return (
    <div className="@container m-auto px-[165px] mb-[110px] flex flex-col gap-[50px]">
      <div className="flex justify-between items-center">
        <h2>ЭЛЕКТРОСАМОКАТЫ</h2>
        <div className="flex gap-[10px]">
          <NavButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-[30px]">
        {array.map((card, index) => (
          <CardProduct {...card} key={index} />
        ))}
      </div>
      <Button
        typeOfButton="white"
        className="border border-purple px-[25px] py-[15px] m-auto"
      >
        Смотреть все
      </Button>
    </div>
  );
}
