import { SetStateAction, Dispatch } from "react";

import { Button } from "@/components/common/Button/Button";
import { navButtons } from "@/components/Main/ProductsBlock/content";

interface INavButtonsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export function NavButtons({ activeTab, setActiveTab }: INavButtonsProps) {
  return (
    <>
      {navButtons.map((button, index) => {
        const activeClass =
          activeTab === button
            ? "outline outline-offset outline-purple bg-white text-purple"
            : "";

        return (
          <Button
            typeOfButton="gray"
            className={`px-[20px] py-[10px] ${activeClass}`}
            key={index}
            onClick={() => setActiveTab(button)}
          >
            {button}
          </Button>
        );
      })}
    </>
  );
}
