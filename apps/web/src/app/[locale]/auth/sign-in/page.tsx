import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SignInForm } from "./_components/sign-in-form";

interface ISignIn {
	params: Promise<{
		locale: Locale;
	}>;
}

export async function generateMetadata({ params }: ISignIn): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.sign_in" });

	return {
		title: t("title"),
	};
}

export default async function SignIn({ params }: ISignIn) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.sign_in" });

	return (
		<main className="main__container">
			<section id="profile" className="container__section">
				<h2 className="section__title">{t("title")}</h2>
				<p className="section__subtitle">{t("title")}</p>
				<SignInForm />
			</section>
		</main>
	);
}
