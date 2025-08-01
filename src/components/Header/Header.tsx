import Link from "next/link";
import Image from "next/image";

import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { messengersButtons } from "./content";
import logo from "../../assets/logo.png";
import shoppingCart from "../../assets/shoppingCartPurple.png";
import heartBlack from "../../assets/heartBlack.png";
import balanceBlack from "../../assets/balanceBlack.png";
import search from "../../assets/search.png";
import plus from "../../assets/plus.png";

export function Header() {
  return (
    <header>
      <div className="@container m-auto px-[165px] py-[11px] flex justify-between items-center">
        <div className="flex justify-between items-center gap-[30px]">
          <nav className="flex items-center gap-[30px] text-light-gray text-xs">
            <Link href="#">Сервис</Link>
            <Link href="#">Сотрудничество</Link>
            <Link href="#">Заказать звонок</Link>
          </nav>
          <div className="flex items-center gap-[10px]">
            {messengersButtons.map((button, index) => (
              <Button typeOfButton="transparentButton" key={index}>
                <Image src={button.img} alt={button.title} width={11} />
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-xs font-medium text-dark">
            +7 (800) 505-54-61
          </span>
          <Image src={plus} alt="plus" width={18} />
        </div>
      </div>
      <hr />
      <div className="@container m-auto px-[165px] py-[35px] flex justify-between items-center">
        <div className="mr-[35px]">
          <Image src={logo} alt="logo" width={116} />
        </div>
        <Button
          typeOfButton="purpleButton"
          className="py-[9px] px-[30px] mr-[20px] font-medium"
        >
          Каталог
        </Button>
        <div className="flex items-center mr-[47px] py-[4px] pl-[4px] h-[40px] grow rounded-xs-3 border-[1.5px] border-purple">
          <select
            name=""
            id=""
            className="mr-[20px] px-[9px] bg-gray rounded-sm-5 w-[76px] text-sm text-dark"
          >
            <option value="">Везде</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <Input placeholder="Искать самокат KUGO" className="w-full" />
          <div className="bg-purple w-[50px] h-[37px] flex items-center justify-center">
            <Image src={search} alt="search" width={16} />
          </div>
        </div>
        <div className="flex gap-[25px]">
          <Button typeOfButton="transparentButton">
            <Image src={balanceBlack} alt="balanceBlack" width={20} />
          </Button>
          <Button typeOfButton="transparentButton">
            <Image src={heartBlack} alt="heartBlack" width={20} />
          </Button>
          <Button typeOfButton="transparentButton" className="flex gap-[10px]">
            <Image src={shoppingCart} alt="shoppingCart" width={20} />
            <span className="text-sm font-medium text-dark">Корзина</span>
          </Button>
        </div>
      </div>
      <div className="@container bg-gray m-auto px-[165px] py-[10px]">
        <nav className="flex gap-[50px] text-sm font-medium text-dark">
          <Link href="#">О магазине</Link>
          <Link href="#">
            Доставка и оплата
            <span className="ml-[8px] text-[10px] text-white bg-purple py-[3px] px-[7px] rounded-xl">
              Доступна рассрочка
            </span>
          </Link>
          <Link href="#">Тест-драйв</Link>
          <Link href="#">Блог</Link>
          <Link href="#">Контакты</Link>
          <Link href="#">
            Акции
            <span className="ml-[8px] text-[10px] text-white bg-purple py-[3px] px-[7px] rounded-xl">
              %
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
