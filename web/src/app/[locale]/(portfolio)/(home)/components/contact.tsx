import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("home.contact");

  return (
    <Section.Root id="contact">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container></Section.Container>
    </Section.Root>
  );
}
