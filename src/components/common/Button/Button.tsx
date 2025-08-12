import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  typeOfButton: string;
}

export function Button({
  children,
  className,
  typeOfButton,
  ...props
}: IButtonProps) {
  const typesOfButton: {
    [key: string]: string;
  } = {
    purple: "bg-purple text-white hover:bg-purple-light rounded-sm-5",
    white:
      "bg-white text-purple hover:bg-purple hover:text-white rounded-sm-5 active:bg-white active:text-purple",
    orange: "bg-orange text-white hover:bg-orange-light rounded-sm-5",
    gray: "bg-gray text-light-gray hover:bg-white hover:text-purple hover:outline hover:outline-offset hover:outline-purple rounded-sm-5 active:bg-gray",
    youtube: "font-medium text-sm text-white bg-red-youtube rounded-sm-5",
    vk: "font-medium text-sm text-white bg-blue-vk rounded-sm-5",
    telegram: "font-medium text-sm text-white bg-blue-telegram rounded-sm-5",
    instagram:
      "font-medium text-sm text-white bg-linear-to-tr from-yellow-gr from-0% via-red-gr via-51% to-purple-gr to-99% rounded-sm-5",
    play: "w-full h-full border-none bg-[url('@/assets/trianglePurple.png')] hover:bg-[url('@/assets/triangleWhite.png')] bg-no-repeat bg-center",
    prev: `w-full h-full border-none bg-[url("@/assets/arrows/arrowSmallLeftPurple.png")] hover:bg-[url("@/assets/arrows/arrowSmallLeft.png")] bg-no-repeat bg-center active:bg-white active:bg-[url("@/assets/arrows/arrowSmallLeftPurple.png")] active:outline active:outline-offset active:outline-purple`,
    next: `w-full h-full border-none bg-[url("@/assets/arrows/arrowSmallRightPurple.png")] hover:bg-[url("@/assets/arrows/arrowSmallRight.png")] bg-no-repeat bg-center active:bg-white active:bg-[url("@/assets/arrows/arrowSmallRightPurple.png")] active:outline active:outline-offset active:outline-purple`,
    transparent: "bg-transparent hover:scale-105",
  };

  return (
    <button
      className={`${typesOfButton[typeOfButton]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
