import { getTranslations } from "next-intl/server";

export async function NewProject() {
	const t = await getTranslations("app.home.components.new_project");

	return (
		<section id="new-project" className="container__section">
			<h2 className="section__title">{t("title")}</h2>
			<p className="section__subtitle">{t("subtitle")}</p>
		</section>
	);
}
