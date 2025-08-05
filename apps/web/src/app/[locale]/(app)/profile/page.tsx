import { auth } from "@/auth";
import { Code } from "@/components/ui/code";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

interface IProfile {
	params: Promise<{
		locale: Locale;
	}>;
}

export async function generateMetadata({
	params,
}: IProfile): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.profile" });

	return {
		title: t("title"),
	};
}

export default async function Profile({ params }: IProfile) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.profile" });
	const session = await auth();

	return (
		<main className="main__container">
			<section id="profile" className="container__section">
				<h2 className="section__title">{t("components.profile.title")}</h2>
				<p className="section__subtitle">{t("components.profile.subtitle")}</p>
				<Code showCopyButton>{JSON.stringify(session, null, 2)}</Code>
			</section>
		</main>
	);
}
