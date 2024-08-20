import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ISectionSubtitle extends ComponentProps<"span"> {}

export function SectionSubtitle({
  children,
  className,
  ...props
}: ISectionSubtitle) {
  return (
    <span
      className={twMerge(
        "text-mauve-dim mb-12 block text-center text-sm lg:mb-16",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
