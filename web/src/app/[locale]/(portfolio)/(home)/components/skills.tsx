import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("home.skills");

  return (
    <section id="skills" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
