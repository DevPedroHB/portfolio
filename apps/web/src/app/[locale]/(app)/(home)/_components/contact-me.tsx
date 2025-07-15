import { getTranslations } from "next-intl/server";

export async function ContactMe() {
	const t = await getTranslations("app.home.components.contact_me");

	return (
		<section id="contact-me" className="container__section">
			<h2 className="section__title">{t("title")}</h2>
			<p className="section__subtitle">{t("subtitle")}</p>
		</section>
	);
}
