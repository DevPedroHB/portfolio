import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "flex gap-2 items-center transition-colors p-4 rounded-lg font-medium group leading-none",
  variants: {
    variant: {
      primary: "bg-violet-solid",
      secondary:
        "bg-mauve-1 text-violet-9 dark:text-violetdark-9 hover:bg-mauve-3",
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
