import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IFormWrapper extends ComponentProps<"div"> {}

export function FormWrapper({ children, className, ...props }: IFormWrapper) {
  return (
    <div className={twMerge("grid w-full gap-6", className)} {...props}>
      {children}
    </div>
  );
}
