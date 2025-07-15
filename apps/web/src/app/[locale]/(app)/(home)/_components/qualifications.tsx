import { getTranslations } from "next-intl/server";

export async function Qualifications() {
	const t = await getTranslations("app.home.components.qualifications");

	return (
		<section id="qualifications" className="container__section">
			<h2 className="section__title">{t("title")}</h2>
			<p className="section__subtitle">{t("subtitle")}</p>
		</section>
	);
}
