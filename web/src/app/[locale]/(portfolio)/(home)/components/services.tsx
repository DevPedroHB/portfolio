import { Dialog } from "@/components/ui/dialog";
import { Section } from "@/components/ui/section";
import * as Lucide from "lucide-react";
import { useTranslations } from "next-intl";

interface IServices {
  title: string;
  icon: keyof typeof Lucide;
  button: string;
  info: string[];
}

export function Services() {
  const t = useTranslations("home.services");
  const services: IServices[] = t.raw("services");

  return (
    <Section.Root id="services">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container className="grid-cols-services lg:gap-6">
        {services.map((service) => {
          const IconComponent = Lucide[service.icon] as Lucide.LucideIcon;

          if (!IconComponent) {
            console.error(`Icon component not found for key: ${service.icon}`);

            return null;
          }

          return (
            <Dialog.Root key={service.title}>
              <div className="bg-mauve-app relative rounded p-service-card shadow-service-card transition-shadow hover:shadow-service-card-hover">
                <div>
                  <IconComponent className="mb-4 block h-8 w-8 text-violet-9 dark:text-violetdark-9" />
                  <h3 className="mb-4 text-xl font-medium">{service.title}</h3>
                </div>
                <Dialog.Trigger className="group flex items-center gap-2 text-sm text-violet-9 transition-colors hover:text-violet-10 dark:text-violetdark-9 dark:hover:text-violetdark-10">
                  {service.button}
                  <Lucide.ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Dialog.Trigger>
                <Dialog.Content className="bg-mauve-app w-full max-w-[450px] rounded-lg p-6">
                  <Dialog.Title className="mb-6 text-xl font-medium">
                    {service.title}
                  </Dialog.Title>
                  <ul className="space-y-4">
                    {service.info.map((info) => {
                      return (
                        <li key={info} className="flex items-center gap-1">
                          <Lucide.CheckCircle className="h-4 w-4 text-violet-9 dark:text-violetdark-9" />
                          <p className="text-mauve-dim">{info}</p>
                        </li>
                      );
                    })}
                  </ul>
                </Dialog.Content>
              </div>
            </Dialog.Root>
          );
        })}
      </Section.Container>
    </Section.Root>
  );
}
