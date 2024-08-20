import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

interface IAboutInfo {
  label: string;
  value: number;
}

export function About() {
  const t = useTranslations("home.about");
  const info: IAboutInfo[] = t.raw("info");

  return (
    <Section.Root id="about">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container className="lg:grid-cols-2">
        <img
          src="https://github.com/DevPedroHB.png"
          alt="PedroHB"
          className="h-[9.875rem] w-[12.5rem] self-center justify-self-center rounded-lg object-cover object-top lg:h-[17rem] lg:w-[21.875rem]"
        />
        <div>
          <p className="text-mauve-dim mb-10 text-center lg:text-start">
            {t("text")}
          </p>
          <div className="mb-10 flex justify-evenly lg:justify-between">
            {info.map((i) => {
              return (
                <div key={i.label}>
                  <span className="block text-center text-2xl font-semibold">
                    {i.value.toString().padStart(2, "0")}+
                  </span>
                  <span className="text-mauve-dim block text-center text-sm">
                    {i.label}
                  </span>
                </div>
              );
            })}
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
