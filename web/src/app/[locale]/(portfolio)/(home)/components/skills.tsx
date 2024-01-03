import { Accordion } from "@/components/ui/accordion";
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
                <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  {skill.technologies.map((technology) => {
                    return (
                      <div key={technology.name}>
                        <div>
                          <h3>{technology.name}</h3>
                          <span>{technology.level}%</span>
                        </div>
                        <div>Progressbar</div>
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
