import { Button } from "@/components/ui/button";
import { LinkScroll } from "@/components/ui/link-scroll";
import { Section } from "@/components/ui/section";
import { SendHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

export function NewProject() {
  const t = useTranslations("home.new-project");

  return (
    <Section.Root id="new-project" className="px-0 lg:px-4">
      <Section.Container className="lg:grid-cols-new-project bg-violet-9 px-4 pt-12 lg:gap-3 lg:rounded-2xl lg:px-10">
        <div className="pt-4 text-center text-mauve-1 lg:text-start">
          <h2 className="mb-3 text-2xl font-semibold">{t("title")}</h2>
          <p className="mb-6">{t("description")}</p>
          <LinkScroll to="contact">
            <Button variant="secondary">
              {t("button")}
              <SendHorizontal className="h-5 w-5" />
            </Button>
          </LinkScroll>
        </div>
        <img
          src="/images/new-project.png"
          alt="Avatar PedroHB"
          className="h-auto w-48 justify-self-center lg:w-60"
        />
      </Section.Container>
    </Section.Root>
  );
}
