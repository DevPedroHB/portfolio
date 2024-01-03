import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ISectionTitle extends ComponentProps<"h2"> {}

export function SectionTitle({ children, className, ...props }: ISectionTitle) {
  return (
    <h2
      className={twMerge(
        "text-center text-2xl font-semibold lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
