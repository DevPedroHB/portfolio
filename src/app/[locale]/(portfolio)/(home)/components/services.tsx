import { getScopedI18n } from "@/locales/server";

export async function Services() {
	const t = await getScopedI18n("home.sections.services");

	return (
		<section id="services" className="pb-16 pt-8 md:pb-8 md:pt-24">
			<h2 className="text-center text-4xl font-semibold">{t("title")}</h2>
			<span className="mb-12 block text-center text-sm text-muted-foreground md:mb-16">
				{t("subtitle")}
			</span>
		</section>
	);
}
