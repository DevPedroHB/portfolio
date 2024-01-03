import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("home.services");

  return (
    <Section.Root id="services">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container></Section.Container>
    </Section.Root>
  );
}
