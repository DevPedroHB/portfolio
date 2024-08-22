"use client";

import { useRouter } from "next/navigation";
import { Link, type LinkProps } from "react-scroll";
import { tv, type VariantProps } from "tailwind-variants";

const scrollLink = tv({
  slots: {
    root: "cursor-pointer font-medium transition-all",
    active: "",
  },
  variants: {
    variant: {
      primary: {
        root: "text-sm hover:text-primary",
        active: "text-primary",
      },
      responsive: {
        root: "flex flex-col items-center text-sm hover:text-primary",
        active: "text-primary",
      },
      footer: {
        root: "hover:brightness-75",
        active: "brightness-75",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface IScrollLink
  extends Omit<LinkProps, "ref">,
    VariantProps<typeof scrollLink> {}

export function ScrollLink({ className, variant, ...rest }: IScrollLink) {
  const router = useRouter();
  const { root, active } = scrollLink({ variant });

  function handleActive(to: string) {
    router.replace(`/#${to}`, {
      scroll: false,
    });
  }

  return (
    <Link
      onSetActive={handleActive}
      activeClass={active()}
      className={root({ className })}
      spy
      isDynamic
      {...rest}
    />
  );
}