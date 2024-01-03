import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

export function Qualification() {
  const t = useTranslations("home.qualification");

  return (
    <Section.Root id="qualification">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container></Section.Container>
    </Section.Root>
  );
}
