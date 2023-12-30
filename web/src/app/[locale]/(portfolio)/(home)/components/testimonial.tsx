import { useTranslations } from "next-intl";

export function Testimonial() {
  const t = useTranslations("home.testimonial");

  return (
    <section id="testimonial" className="grid min-h-screen place-items-center">
      {t("title")}
    </section>
  );
}
