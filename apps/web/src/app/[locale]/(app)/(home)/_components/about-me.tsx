import { getTranslations } from "next-intl/server";

export async function AboutMe() {
	const t = await getTranslations("app.home.components.about_me");

	return (
		<section id="about-me" className="container__section">
			<h2 className="section__title">{t("title")}</h2>
			<p className="section__subtitle">{t("subtitle")}</p>
		</section>
	);
}
