import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("home.services");

  return (
    <section id="services" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
