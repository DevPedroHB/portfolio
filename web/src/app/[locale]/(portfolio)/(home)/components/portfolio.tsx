import { useTranslations } from "next-intl";

export function Portfolio() {
  const t = useTranslations("home.portfolio");

  return (
    <section id="portfolio" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
