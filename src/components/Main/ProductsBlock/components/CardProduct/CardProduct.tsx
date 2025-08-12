import Image from "next/image";

import { Button } from "@/components/common/Button/Button";
import {
  IProductsFields,
  statusOfProduct,
} from "@/components/Main/ProductsBlock/content";
import accumulatorIcon from "@/assets/productDescription/accumulatorIcon.png";
import powerIcon from "@/assets/productDescription/powerIcon.png";
import timerIcon from "@/assets/productDescription/timerIcon.png";
import speedometerIcon from "@/assets/productDescription/speedometerIcon.png";
import BalanceIcon from "@/assets/balanceIcon.svg";
import HeartIcon from "@/assets/heartIcon.svg";
import ShoppingCartIcon from "@/assets/shoppingCartIcon.svg";

export function CardProduct({
  status,
  image,
  productName,
  accumulator,
  power,
  speedometer,
  timer,
  oldPrice,
  newPrice,
}: IProductsFields) {
  const styleOfProduct =
    status === statusOfProduct.hit
      ? "bg-coral uppercase"
      : status === statusOfProduct.new
      ? "bg-salad"
      : "";

  return (
    <div className="w-[255px] max-w-[255px] border border-light rounded-lg">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={`p-[10px] bg-clip-padding bg-no-repeat bg-cover w-full h-[231px] border"`}
      >
        <div className="relative flex items-center h-full">
          <div className="absolute top-0 flex justify-between items-center w-full">
            <span
              className={`${styleOfProduct} text-white text-xs py-[4px] px-[9px] rounded-sm-5 `}
            >
              {status}
            </span>
            <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-white/20">
              <Button typeOfButton="transparent">
                <BalanceIcon className="text-light-gray hover:text-purple w-[20px] h-[20px]" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[40px] h-[40px]">
              <Button
                typeOfButton="prev"
                className="rounded-full bg-white hover:bg-purple"
              ></Button>
            </div>
            <div className="w-[40px] h-[40px]">
              <Button
                typeOfButton="next"
                className="rounded-full bg-white hover:bg-purple"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] px-[24px] py-[20px]">
        <h5 className="font-semibold text-lg text-dark">{productName}</h5>
        <div className="flex justify-between flex-wrap h-[52px]  text-light-gray text-sm font-roboto">
          <div className="flex justify-start items-center gap-[10px] w-[93px]">
            <Image
              src={accumulatorIcon}
              alt="accumulator"
              className="w-[18px] h-[18px]"
            />
            <span>{accumulator}</span>
          </div>
          <div className="flex justify-start items-center gap-[10px] w-[93px]">
            <Image src={powerIcon} alt="power" className="w-[18px] h-[18px]" />
            <span>{power}</span>
          </div>
          <div className="flex justify-start items-center gap-[10px] w-[93px]">
            <Image
              src={speedometerIcon}
              alt="speedometer"
              className="w-[18px] h-[18px]"
            />
            <span>{speedometer}</span>
          </div>
          <div className="flex justify-start items-center gap-[10px] w-[93px]">
            <Image src={timerIcon} alt="timer" className="w-[18px] h-[18px]" />
            <span>{timer}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-medium text-xs text-light-gray line-through">
              {oldPrice} ₽
            </span>
            <span className="font-semibold text-xl text-dark">
              {newPrice} ₽
            </span>
          </div>
          <div className="flex gap-[13px]">
            <Button
              typeOfButton="transparent"
              className="flex justify-center items-center border border-lightest-gray w-[40px] h-[40px] rounded-full hover:bg-lightest-gray active:bg-white"
            >
              <ShoppingCartIcon className="text-light-gray hover:text-purple w-[20px] h-[20px]" />
            </Button>
            <Button
              typeOfButton="transparent"
              className="flex justify-center items-center border border-lightest-gray w-[40px] h-[40px] rounded-full hover:bg-lightest-gray active:bg-white"
            >
              <HeartIcon className="text-light-gray hover:text-purple w-[20px] h-[20px]" />
            </Button>
          </div>
        </div>
        <Button
          typeOfButton="purple"
          className="text-xs w-full px-[63px] py-[10px]"
        >
          Купить в 1 клик
        </Button>
      </div>
    </div>
  );
}
