import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ISectionRoot extends ComponentProps<"section"> {}

export function SectionRoot({ children, className, ...props }: ISectionRoot) {
  return (
    <section
      className={twMerge("p-section-responsive lg:p-section", className)}
      {...props}
    >
      {children}
    </section>
  );
}
