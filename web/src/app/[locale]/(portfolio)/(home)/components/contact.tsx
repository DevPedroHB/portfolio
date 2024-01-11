import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import * as Lucide from "lucide-react";
import { useTranslations } from "next-intl";

interface IContact {
  icon: keyof typeof Lucide;
  label: string;
  value: string;
}

export function Contact() {
  const t = useTranslations("home.contact");
  const contacts: IContact[] = t.raw("contacts");

  return (
    <Section.Root id="contact">
      <Section.Title>{t("title")}</Section.Title>
      <Section.Subtitle>{t("subtitle")}</Section.Subtitle>
      <Section.Container className="lg:grid-cols-new-project lg:gap-6">
        <div>
          {contacts.map((contact) => {
            const IconComponent = Lucide[contact.icon] as Lucide.LucideIcon;

            if (!IconComponent) {
              console.error(
                `Icon component not found for key: ${contact.icon}`,
              );

              return null;
            }

            return (
              <div key={contact.label} className="mb-8 flex gap-3">
                <IconComponent className="h-7 w-7 text-violet-9 dark:text-violetdark-9" />
                <div className="flex-1">
                  <h3 className="text-xl font-medium">{contact.label}</h3>
                  <span className="text-mauve-dim text-sm">
                    {contact.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <Form.Root className="max-w-contact-form">
          <Form.Wrapper className="lg:grid-cols-2">
            <Input id="name" type="text" label={t("form.name")} />
            <Input id="email" type="email" label={t("form.email")} />
          </Form.Wrapper>
          <Input id="project" type="text" label={t("form.project")} />
          <Textarea id="message" label={t("form.message")} rows={7} />
          <Button type="submit" className="w-fit">
            {t("form.button")}
            <Lucide.SendHorizontal className="h-5 w-5" />
          </Button>
        </Form.Root>
      </Section.Container>
    </Section.Root>
  );
}
