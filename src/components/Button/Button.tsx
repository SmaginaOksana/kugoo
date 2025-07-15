import { ComponentProps } from "react";

function Button({ children, className, ...props }: ComponentProps<"button">) {
  return (
    <button className="" {...props}>
      {children}
    </button>
  );
}

export default Button;
