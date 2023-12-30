import { Link } from "@/navigation";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import { LinkScroll } from "./link-scroll";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mb-12 bg-violet-9 px-4 pb-14 pt-12 text-mauvedark-12 lg:mb-0 dark:bg-violetdark-9">
      <div className="mx-auto max-w-app space-y-16">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="mb-2 text-4xl font-semibold">{t("title")}</h1>
            <span className="text-sm">{t("sub-title")}</span>
          </div>
          <ul className="flex gap-6 transition-colors">
            <li>
              <LinkScroll to="services" variant="footer">
                {t("links.services")}
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="portfolio" variant="footer">
                {t("links.portfolio")}
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="contact" variant="footer">
                {t("links.contact")}
              </LinkScroll>
            </li>
          </ul>
          <div className="flex gap-8">
            <Link href="https://www.facebook.com" target="_blank">
              <Facebook className="h-5 w-5 transition-colors hover:text-mauvedark-11" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <Instagram className="h-5 w-5 transition-colors hover:text-mauvedark-11" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <Twitter className="h-5 w-5 transition-colors hover:text-mauvedark-11" />
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-mauvedark-11">
          &copy; {t("title")}. {t("copy")}
        </div>
      </div>
    </footer>
  );
}
