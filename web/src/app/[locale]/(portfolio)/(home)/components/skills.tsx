import { Accordion } from "@/components/ui/accordion";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Section } from "@/components/ui/section";
import { skills } from "@/constants/skills";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("home.skills");

  return (
    <Section.Root id="skills">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Accordion.Root type="single" defaultValue={skills[0].id} collapsible>
        <Section.Container className="lg:grid-cols-2">
          {skills.map((skill) => {
            return (
              <Accordion.Item key={skill.id} value={skill.id} className="group">
                <Accordion.Trigger className="mb-10 flex w-full items-center gap-3">
                  <skill.icon className="h-8 w-8 text-violet-9" />
                  <div className="flex-1 text-start">
                    <h3 className="text-xl font-semibold">
                      {t(`skills.${skill.id}.title`)}
                    </h3>
                    <span className="text-mauve-dim text-sm">
                      {t(`skills.${skill.id}.subtitle`)}
                    </span>
                  </div>
                  <ChevronDown className="h-6 w-6 text-violet-9 transition-all group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="pl-skills-list mb-10 grid gap-6 overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  {skill.technologies.map((technology) => {
                    return (
                      <div key={technology.name}>
                        <div className="mb-2 flex justify-between">
                          <h3 className="font-medium">{technology.name}</h3>
                          <span className="text-mauve-dim">
                            {technology.level}%
                          </span>
                        </div>
                        <ProgressBar value={technology.level} />
                      </div>
                    );
                  })}
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Section.Container>
      </Accordion.Root>
    </Section.Root>
  );
}
