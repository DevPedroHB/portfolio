import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { ISkill } from "@/constants/skills";
import { getScopedI18n } from "@/locales/server";
import * as ReactSimpleIcons from "@icons-pack/react-simple-icons";
import { differenceInYears } from "date-fns";
import * as Lucide from "lucide-react";

interface ISkillAccordion {
	skill: ISkill;
}

export async function SkillAccordion({ skill }: ISkillAccordion) {
	const t = await getScopedI18n(`home.sections.skills.accordions.${skill.id}`);
	const Icon = Lucide[skill.icon] as Lucide.LucideIcon;
	const currentYear = new Date();
	const pastYear = new Date(2018, 0, 1);
	const yearsDiff = differenceInYears(currentYear, pastYear);

	return (
		<AccordionItem value={skill.id} className="border-none">
			<AccordionTrigger className="mb-10 gap-3 p-0">
				<Icon className="size-8 text-primary" />
				<div className="flex-1 text-start">
					<h3 className="text-xl font-semibold">{t("title")}</h3>
					<p className="text-sm font-normal text-muted-foreground">
						{t("subtitle", { years: yearsDiff })}
					</p>
				</div>
			</AccordionTrigger>
			<AccordionContent className="mb-10 flex flex-wrap gap-4 p-0">
				{skill.stacks.map((stack) => {
					const Stack = ReactSimpleIcons[stack] as ReactSimpleIcons.IconType;

					return <Stack key={stack} color="default" className="size-8" />;
				})}
			</AccordionContent>
		</AccordionItem>
	);
}
