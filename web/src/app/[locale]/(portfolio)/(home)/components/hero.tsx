import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section id="hero" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
