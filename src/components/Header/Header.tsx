import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/common/Button/Button";
import { Input } from "@/components/common/Input/Input";
import { messengersButtons, userButtons, dropdown, links } from "./content";
import logo from "@/assets/logo.png";
import search from "@/assets/search.png";
import Plus from "@/assets/plus.svg";

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
            {messengersButtons.map((button, index) => {
              const { icon: Icon, activeColor } = button;

              return (
                <Button typeOfButton="transparentButton" key={index}>
                  <Icon
                    className="messengersIconsColor text-light-gray w-[11px]"
                    style={{
                      "--icon-active-color": activeColor,
                    }}
                  />
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-xs font-medium text-dark">
            +7 (800) 505-54-61
          </span>
          <Plus className="w-[18px] stroke-light-gray fill-white hover:fill-light-gray hover:stroke-white cursor-pointer" />
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
            className="mr-[20px] px-[9px] bg-gray rounded-sm-5 w-[76px] text-sm text-dark focus:outline-none"
          >
            {dropdown.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
          <Input placeholder="Искать самокат KUGO" className="w-full" />
          <div className="bg-purple w-[50px] h-[37px] flex items-center justify-center">
            <Image src={search} alt="search" width={16} />
          </div>
        </div>
        <div className="flex gap-[25px]">
          {userButtons.map((button, index) => {
            const { icon: Icon, text } = button;
            return (
              <Button
                key={index}
                typeOfButton="transparentButton"
                className={`${button.text && `flex gap-[10px]`}`}
              >
                <Icon className="text-dark hover:text-purple w-[20px] h-[20px]" />
                {text && (
                  <span className="text-sm font-medium text-dark">Корзина</span>
                )}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="@container bg-gray m-auto px-[165px] py-[10px]">
        <nav className="flex gap-[50px] text-sm font-medium text-dark">
          {links.map((link, index) => (
            <Link href={link.path} key={index}>
              {link.link}
              {link.text && (
                <span className="ml-[8px] text-[10px] text-white bg-purple py-[3px] px-[7px] rounded-xl">
                  {link.text}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
