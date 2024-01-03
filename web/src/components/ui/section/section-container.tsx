import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ISectionContainer extends ComponentProps<"div"> {}

export function SectionContainer({
  children,
  className,
  ...props
}: ISectionContainer) {
  return (
    <div
      className={twMerge("gap-4.5 mx-auto grid max-w-app lg:gap-20", className)}
      {...props}
    >
      {children}
    </div>
  );
}
