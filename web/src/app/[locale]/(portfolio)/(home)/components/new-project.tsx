import { useTranslations } from "next-intl";

export function NewProject() {
  const t = useTranslations("home.new-project");

  return (
    <section id="new-project" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
