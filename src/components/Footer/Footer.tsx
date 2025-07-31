import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import logo from "../../assets/logo.png";
import Image from "next/image";
import {
  buttonsForPurchase,
  buttonsSocialLinks,
  waysToPayButtons,
  messengersButtons,
  links,
  contactsFirstBlock,
  contactsSecondBlock,
} from "./content";

export function Footer() {
  return (
    <footer>
      <div className="@container m-auto px-[165px] pt-[24px] pb-[21px] bg-purple flex justify-between w-full gap-[20px] text-white text-[16px]">
        <p className="font-semibold">
          ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ
          САМОКАТЫ
        </p>
        <form>
          <Input
            type="text"
            id="email"
            placeholder="Введите Ваш email"
            className="px-[25px] py-[15px] w-[410px] rounded-sm-5 bg-white/20"
          />
        </form>
        <Button
          typeOfButton="whiteButton"
          className="px-[25px] py-[15px] border w-[148px]"
        >
          Подписаться
        </Button>
      </div>
      <div className="@container m-auto px-[165px] pt-[46px] pb-[18px] bg-gray">
        <div className="flex justify-between py-[46px]">
          <div className="flex gap-[80px]">
            {links.map((link, index) => (
              <div key={index}>
                <h5 className="text-dark mb-[17px]">{link.title}</h5>
                <div className="flex flex-col flex-wrap gap-[10px] h-[110px]">
                  {link.list.map((link, index) => (
                    <span
                      key={index}
                      className="text-sm mr-[46px] text-light-gray"
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center mb-[17px]">
              <h5 className="text-dark">Контакты</h5>
              <Button
                typeOfButton="transparentButton"
                className="text-purple text-xs font-medium"
              >
                Заказать звонок
              </Button>
            </div>
            <div className="flex flex-col gap-[28px]">
              <div className="flex gap-[30px]">
                {contactsFirstBlock.map((contacts, index) => {
                  const { title, contact, openHours } = contacts;

                  return (
                    <div key={index} className="flex flex-col w-[144px]">
                      <span className="text-xs text-dark mb-[5px]">
                        {title}
                      </span>
                      <span className="text-base text-dark font-medium">
                        {contact}
                      </span>
                      <span className="text-xs text-light-gray mt-[7px]">
                        {openHours}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[30px]">
                {contactsSecondBlock.map((contacts, index) => {
                  const { title, contact, adress } = contacts;

                  return (
                    <div key={index} className="flex flex-col w-[144px]">
                      <span className="text-sm text-dark mb-[5px]">
                        {title}
                      </span>
                      <span className="text-sm text-dark mb-[8px]">
                        {adress}
                      </span>
                      <span className="text-xs text-light-gray">{contact}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-[35px] flex justify-between items-center">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex gap-[10px]">
            {buttonsForPurchase.map((button, index) => (
              <Button
                typeOfButton="whiteButton"
                className="h-[55px] py-[8px] px-[10px] flex gap-[7px]"
                key={index}
              >
                <div className="flex">
                  <Image src={button.img} alt={button.title} width={30} />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs font-medium">
                    {button.title}
                  </span>
                  <span className="text-black text-base font-semibold">
                    {button.text}
                  </span>
                </div>
              </Button>
            ))}
          </div>
          <div className="flex gap-[10px]">
            {buttonsSocialLinks.map((button, index) => (
              <Button
                typeOfButton="whiteButton"
                className="h-[55px] w-[123px] py-[8px] px-[10px] flex items-center gap-[11px]"
                key={index}
              >
                <div className="flex h-[20px]">
                  <Image src={button.img} alt={button.title} width={20} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-black text-xs font-medium">
                    {button.title}
                  </span>
                  <span className="text-black text-base font-semibold">
                    {button.text}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>
        <hr />
        <div className="py-[18px] flex justify-between">
          <div className="flex gap-[44px]">
            <a href="#">Реквизиты</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
          <div className="flex justify-between gap-[37px]">
            <div className="flex gap-[4px]">
              {waysToPayButtons.map((button, index) => (
                <Button
                  typeOfButton="whiteButton"
                  key={index}
                  className="w-[34px]"
                >
                  <Image
                    src={button.img}
                    alt={button.title}
                    className="m-auto"
                  />
                </Button>
              ))}
            </div>
            <div className="flex gap-[14px]">
              Online чат:
              {messengersButtons.map((button, index) => (
                <Button typeOfButton="transparentButton" key={index}>
                  <Image src={button.img} alt={button.title} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
