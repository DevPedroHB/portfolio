"use client";

import * as Lucide from "lucide-react";
import { useRouter } from "next/navigation";
import { Link, type LinkProps } from "react-scroll";
import { tv, type VariantProps } from "tailwind-variants";

const navbarLink = tv({
  slots: {
    root: "cursor-pointer text-sm font-medium transition-all hover:text-primary",
    active: "text-primary",
  },
  variants: {
    variant: {
      responsive: {
        root: "flex flex-col items-center",
      },
    },
  },
});

export type TNavbarLink = {
  label: string;
  icon: keyof typeof Lucide;
  path: string;
};

interface INavbarLink
  extends Omit<LinkProps, "ref">,
    VariantProps<typeof navbarLink> {}

export function NavbarLink({ className, variant, ...rest }: INavbarLink) {
  const router = useRouter();
  const { root, active } = navbarLink({ variant });

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
