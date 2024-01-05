import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("home.about");

  return (
    <Section.Root id="about">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container className="lg:grid-cols-2">
        <img
          src="https://github.com/DevPedroHB.png"
          alt="PedroHB"
          className="lg:h-[17rem] lg:w-[21.875rem] self-center justify-self-center rounded-lg object-cover object-top w-[12.5rem] h-[9.875rem]"
        />
        <div>
          <p className="text-mauve-dim mb-10 text-center lg:text-start">
            {t("text")}
          </p>
          <div className="mb-10 flex justify-evenly lg:justify-between">
            <div>
              <span className="block text-center text-2xl font-semibold">
                05+
              </span>
              <span className="text-mauve-dim block text-center text-sm">
                {t("experience")}
              </span>
            </div>
            <div>
              <span className="block text-center text-2xl font-semibold">
                10+
              </span>
              <span className="text-mauve-dim block text-center text-sm">
                {t("projects")}
              </span>
            </div>
            <div>
              <span className="block text-center text-2xl font-semibold">
                02+
              </span>
              <span className="text-mauve-dim block text-center text-sm">
                {t("companies-worked")}
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/pdf/Currículo Pedro Henrique Bérgamo.pdf"
              download=""
              className="w-fit rounded-lg"
            >
              <Button>
                {t("button")}
                <Download />
              </Button>
            </a>
          </div>
        </div>
      </Section.Container>
    </Section.Root>
  );
}
