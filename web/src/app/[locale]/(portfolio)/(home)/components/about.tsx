import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("home.about");

  return (
    <section id="about" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
