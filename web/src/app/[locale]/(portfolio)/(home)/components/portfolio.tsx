import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

export function Portfolio() {
  const t = useTranslations("home.portfolio");

  return (
    <Section.Root id="portfolio">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container></Section.Container>
    </Section.Root>
  );
}
