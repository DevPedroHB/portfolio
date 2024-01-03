import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "flex gap-2 items-center transition-colors p-4 rounded-lg font-medium",
  variants: {
    variant: {
      primary: "bg-violet-solid",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface IButton
  extends ComponentProps<"button">,
    VariantProps<typeof button> {}

export function Button({ children, variant, className, ...props }: IButton) {
  return (
    <button className={button({ variant, className })} {...props}>
      {children}
    </button>
  );
}
