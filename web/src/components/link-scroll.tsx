"use client";

import { ReactNode } from "react";
import { Link } from "react-scroll";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";
import { VariantProps, tv } from "tailwind-variants";

const linkScroll = tv({
  base: "transition-colors font-medium cursor-pointer flex gap-1 items-center",
  variants: {
    variant: {
      primary: "hover:text-violet-9 dark:hover:text-violetdark-9",
      nav: "hover:text-violet-9 dark:hover:text-violetdark-9 flex-col",
      footer: "hover:text-mauvedark-11 font-normal",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ILinkScroll
  extends ReactScrollLinkProps,
    VariantProps<typeof linkScroll> {
  children: ReactNode;
  className?: string;
}

export function LinkScroll({
  children,
  className,
  variant,
  ...props
}: ILinkScroll) {
  return (
    <Link {...props} className={linkScroll({ variant, className })} spy={true}>
      {children}
    </Link>
  );
}
