import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

export function Testimonial() {
  const t = useTranslations("home.testimonial");

  return (
    <Section.Root id="testimonial">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container></Section.Container>
    </Section.Root>
  );
}
