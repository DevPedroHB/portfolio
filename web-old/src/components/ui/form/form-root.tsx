import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IFormRoot extends ComponentProps<"form"> {}

export function FormRoot({ children, className, ...props }: IFormRoot) {
  return (
    <form className={twMerge("grid w-full gap-6", className)} {...props}>
      {children}
    </form>
  );
}
