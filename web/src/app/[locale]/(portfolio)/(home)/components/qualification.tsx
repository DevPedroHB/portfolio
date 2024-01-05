"use client";

import { Section } from "@/components/ui/section";
import { Tabs } from "@/components/ui/tabs";
import { qualifications } from "@/constants/qualifications";
import { CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";

export function Qualification() {
  const t = useTranslations("home.qualification");

  return (
    <Section.Root id="qualification">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Tabs.Root defaultValue={qualifications[0].id}>
        <Section.Container className="gap-0 lg:gap-0">
          <Tabs.List className="mb-8 flex justify-evenly lg:justify-center">
            {qualifications.map((qualification) => {
              return (
                <Tabs.Trigger
                  key={qualification.id}
                  value={qualification.id}
                  className="text-mauve-dim mx-4 flex items-center gap-1 text-xl font-medium transition-colors data-[state=active]:text-violet-9 hover:text-violet-9 dark:data-[state=active]:text-violetdark-9 dark:hover:text-violetdark-9"
                >
                  <qualification.icon className="h-[1.8rem] w-[1.8rem]" />
                  {t(`qualifications.${qualification.id}.title`)}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          {qualifications.map((qualification) => {
            return (
              <Tabs.Content
                key={qualification.id}
                value={qualification.id}
                className="grid grid-cols-1 justify-center"
              >
                {qualification.qualifications.map((q, i) => {
                  if (i % 2 === 0) {
                    return (
                      <div
                        key={q.title}
                        className="grid grid-cols-qualification-data gap-2 lg:gap-6"
                      >
                        <div>
                          <h3 className="font-medium">{q.title}</h3>
                          <span className="text-mauve-dim mb-4 block text-sm">
                            {q.subtitle}
                          </span>
                          <div className="text-mauve-dim flex items-center gap-1 text-xs">
                            <CalendarDays className="h-[.813rem] w-[.813rem]" />
                            {q.time}
                          </div>
                        </div>
                        <div>
                          <span className="bg-violet-solid inline-block h-[13px] w-[13px] rounded-full transition-colors" />
                          <span className="bg-violet-solid block h-full w-px translate-x-line-x translate-y-line-y transition-colors" />
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={q.title}
                        className="grid grid-cols-qualification-data gap-6"
                      >
                        <div />
                        <div>
                          <span className="bg-violet-solid inline-block h-[13px] w-[13px] rounded-full transition-colors" />
                          <span className="bg-violet-solid block h-full w-px translate-x-line-x translate-y-line-y transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-medium" title={q.description}>
                            {q.title}
                          </h3>
                          <span className="text-mauve-dim mb-4 block text-sm">
                            {q.subtitle}
                          </span>
                          <div className="text-mauve-dim flex items-center gap-1 text-xs">
                            <CalendarDays className="h-[.813rem] w-[.813rem]" />
                            {q.time}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </Tabs.Content>
            );
          })}
        </Section.Container>
      </Tabs.Root>
    </Section.Root>
  );
}
