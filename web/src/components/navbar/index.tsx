import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import { ChangeLocale } from "../change-locale";
import { ChangeTheme } from "../change-theme";
import { Card, CardContent } from "../ui/card";
import { NavbarLink, type TNavbarLink } from "./navbar-link";
import { NavbarMobile } from "./navbar-mobile";

export async function Navbar() {
  const t = await getTranslations("navbar");
  const links: TNavbarLink[] = t.raw("links");

  return (
    <Card className="fixed inset-x-0 bottom-0 h-12 rounded-none px-6 md:top-0 md:h-[4.5rem]">
      <CardContent className="mx-auto flex h-full max-w-[60.5rem] items-center justify-between gap-4 p-0">
        <NextLink
          href="/"
          className="font-medium transition-all hover:text-primary"
        >
          {t("title")}
        </NextLink>
        <div className="hidden flex-1 justify-end gap-8 md:flex">
          {links.map((link) => {
            return (
              <NavbarLink key={link.path} to={link.path}>
                {link.label}
              </NavbarLink>
            );
          })}
        </div>
        <div className="flex gap-4">
          <ChangeLocale />
          <ChangeTheme />
          <NavbarMobile />
        </div>
      </CardContent>
    </Card>
  );
}
