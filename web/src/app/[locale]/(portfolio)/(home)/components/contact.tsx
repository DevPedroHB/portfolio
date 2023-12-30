import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("home.contact");

  return (
    <section id="contact" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
