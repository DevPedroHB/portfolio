import { Accordion } from "@/components/ui/accordion";
import { skills } from "@/constants/skills";
import { getScopedI18n } from "@/locales/server";
import { SkillAccordion } from "./skill-accordion";

export async function Skills() {
	const t = await getScopedI18n("home.sections.skills");

	return (
		<section id="skills" className="pb-16 pt-8 md:pb-8 md:pt-24">
			<h2 className="text-center text-4xl font-semibold">{t("title")}</h2>
			<span className="mb-12 block text-center text-sm text-muted-foreground md:mb-16">
				{t("subtitle")}
			</span>
			<Accordion
				type="single"
				defaultValue={skills[0].id}
				className="flex flex-wrap md:gap-6"
				collapsible
			>
				<div className="flex-1">
					{skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => {
						return <SkillAccordion key={skill.id} skill={skill} />;
					})}
				</div>
				<div className="flex-1">
					{skills.slice(Math.ceil(skills.length / 2)).map((skill) => {
						return <SkillAccordion key={skill.id} skill={skill} />;
					})}
				</div>
			</Accordion>
		</section>
	);
}
