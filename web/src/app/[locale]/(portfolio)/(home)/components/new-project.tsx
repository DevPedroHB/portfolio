import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

export function NewProject() {
  const t = useTranslations("home.new-project");

  return (
    <Section.Root id="new-project">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("description")}</Section.Subtitle>
      <Section.Container></Section.Container>
    </Section.Root>
  );
}
