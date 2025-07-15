import { getTranslations } from "next-intl/server";

export async function Skills() {
	const t = await getTranslations("app.home.components.skills");

	return (
		<section id="skills" className="container__section">
			<h2 className="section__title">{t("title")}</h2>
			<p className="section__subtitle">{t("subtitle")}</p>
		</section>
	);
}
