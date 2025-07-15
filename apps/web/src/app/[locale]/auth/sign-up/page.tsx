import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

interface ISignUp {
	params: Promise<{
		locale: Locale;
	}>;
}

export async function generateMetadata({ params }: ISignUp): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.sign_up" });

	return {
		title: t("title"),
	};
}

export default async function SignUp({ params }: ISignUp) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.sign_up" });

	return (
		<main className="main__container">
			<section id="profile" className="container__section">
				<h2 className="section__title">{t("title")}</h2>
				<p className="section__subtitle">{t("title")}</p>
			</section>
		</main>
	);
}
