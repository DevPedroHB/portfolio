"use client";

import { Link } from "@/navigation";
import * as Lucide from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChangeLanguage } from "./change-language";
import { ToggleTheme } from "./toggle-theme";
import { LinkScroll } from "./ui/link-scroll";

interface ILink {
  label: string;
  icon: keyof typeof Lucide;
  path: string;
}

export function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const t = useTranslations("navbar");
  const links: ILink[] = t.raw("links");

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  useEffect(() => {
    const handleScrollNav = () => {
      if (window.scrollY >= 72) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  return (
    <header
      data-scroll={scrollNav}
      className="bg-mauve-app fixed bottom-0 left-0 z-30 w-full px-4 data-[scroll=true]:shadow-nav lg:bottom-auto lg:top-0"
    >
      <nav className="mx-auto flex h-nav-responsive max-w-nav items-center justify-between gap-4 lg:h-nav">
        <Link
          href="/"
          className="z-40 font-medium transition-colors hover:text-violet-9 dark:hover:text-violetdark-9"
        >
          {t("title")}
        </Link>
        <div
          data-toggle={toggle}
          className={twMerge(
            "bg-mauve-app fixed -bottom-full left-0 w-full rounded-t-3xl p-nav-menu text-sm shadow-nav transition-all",
            "lg:relative lg:bottom-auto lg:ml-auto lg:w-fit lg:p-0 lg:shadow-none",
            "data-[toggle=true]:bottom-0",
          )}
        >
          <ul
            className={twMerge(
              "grid grid-cols-3 place-items-center gap-8",
              "lg:flex lg:items-center lg:gap-8",
            )}
          >
            {links.map((link) => {
              const IconComponent = Lucide[link.icon] as Lucide.LucideIcon;

              if (!IconComponent) {
                console.error(`Icon component not found for key: ${link.icon}`);

                return null;
              }

              return (
                <li key={link.label}>
                  <LinkScroll
                    to={link.path}
                    onClick={handleToggle}
                    variant="nav"
                    activeClass="active-link"
                  >
                    <IconComponent className="h-5 w-5 lg:hidden" />
                    {link.label}
                  </LinkScroll>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="z-40 flex items-center gap-4">
          <ChangeLanguage />
          <ToggleTheme />
          <button
            className="leading-none transition-colors hover:text-violet-9 lg:hidden dark:hover:text-violetdark-9"
            onClick={handleToggle}
          >
            {toggle ? (
              <Lucide.X className="h-5 w-5" />
            ) : (
              <Lucide.LayoutGrid className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
