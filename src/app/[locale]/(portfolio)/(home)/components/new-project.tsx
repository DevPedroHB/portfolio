import { getScopedI18n } from "@/locales/server";

export async function NewProject() {
	const t = await getScopedI18n("home.sections.new-project");

	return (
		<section id="new-project" className="pb-16 pt-8 md:pb-8 md:pt-24">
			<h2 className="text-center text-4xl font-semibold">{t("title")}</h2>
			<span className="mb-12 block text-center text-sm text-muted-foreground md:mb-16">
				{t("subtitle")}
			</span>
		</section>
	);
}
