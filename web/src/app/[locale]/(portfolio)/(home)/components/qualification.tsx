import { useTranslations } from "next-intl";

export function Qualification() {
  const t = useTranslations("home.qualification");

  return (
    <section
      id="qualification"
      className="grid min-h-screen place-items-center"
    >
      {t("title")}
    </section>
  );
}
