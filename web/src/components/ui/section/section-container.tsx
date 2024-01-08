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
      className={twMerge(
        "relative mx-auto grid max-w-app gap-6 lg:gap-20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
