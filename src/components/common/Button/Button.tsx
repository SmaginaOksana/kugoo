import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  typeOfButton: string;
}

function Button({ children, className, typeOfButton, ...props }: IButtonProps) {
  const typesOfButton: {
    [key: string]: string;
  } = {
    purpleButton: "bg-purple text-white hover:bg-purple-light rounded-sm-5",
    whiteButton:
      "bg-white text-purple hover:bg-purple hover:text-white rounded-sm-5",
    orangeButton: "bg-orange text-white hover:bg-orange-light rounded-sm-5",
    grayButton: "bg-gray text-light-gray hover:bg-purple rounded-sm-5",
    youtubeButton: "font-medium text-sm text-white bg-red-youtube rounded-sm-5",
    vkButton: "font-medium text-sm text-white bg-blue-vk rounded-sm-5",
    telegramButton:
      "font-medium text-sm text-white bg-blue-telegram rounded-sm-5",
    instagramButton:
      "font-medium text-sm text-white bg-linear-to-tr from-yellow-gr from-0% via-red-gr via-51% to-purple-gr to-99% rounded-sm-5",
    playButton:
      "w-full h-full border-none bg-[url('/trianglePurple.png')] hover:bg-[url('/triangleWhite.png')] bg-no-repeat bg-center ",
    prevButton: `w-full h-full border-none bg-[url("/arrowSmallLeftPurple.png")] hover:bg-[url("/arrowSmallLeft.png")] bg-no-repeat bg-center `,
    nextButton: `w-full h-full border-none bg-[url("/arrowSmallRightPurple.png")] hover:bg-[url("/arrowSmallRight.png")] bg-no-repeat bg-center `,
  };

  return (
    <button
      className={`${typesOfButton[typeOfButton]} ${className} font-jost`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
