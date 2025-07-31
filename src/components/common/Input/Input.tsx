import { HTMLProps, forwardRef } from "react";

interface IInputProps extends HTMLProps<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`${className} focus:outline-none focus:placeholder-transparent`}
        ref={ref}
        {...props}
      />
    );
  }
);
