"use client";

import * as Lucide from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavbarLink, type TNavbarLink } from "./navbar-link";

export function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbar");
  const links: TNavbarLink[] = t.raw("links");

  function handleOpenChange() {
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <Lucide.LayoutGrid className="size-5 transition-all hover:text-primary" />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="grid grid-cols-3 gap-8 rounded-t-xl px-6 py-8"
      >
        {links.map((link) => {
          const Icon = Lucide[link.icon] as Lucide.LucideIcon;

          return (
            <NavbarLink
              key={link.path}
              variant="responsive"
              to={link.path}
              onClick={handleOpenChange}
            >
              <Icon className="size-5 md:hidden" />
              {link.label}
            </NavbarLink>
          );
        })}
      </SheetContent>
    </Sheet>
  );
}
