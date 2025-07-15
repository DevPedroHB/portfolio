import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

interface IUserProfile {
	params: Promise<{
		locale: Locale;
		userId: string;
	}>;
}

export async function generateMetadata({
	params,
}: IUserProfile): Promise<Metadata> {
	const { locale, userId } = await params;
	const t = await getTranslations({ locale, namespace: "app.user_profile" });

	return {
		title: t("title", { name: userId }),
	};
}

export default async function UserProfile({ params }: IUserProfile) {
	const { locale, userId } = await params;
	const t = await getTranslations({ locale, namespace: "app.user_profile" });

	return (
		<main className="main__container">
			<section id="profile" className="container__section">
				<h2 className="section__title">
					{t("components.user_profile.title", { name: userId })}
				</h2>
				<p className="section__subtitle">
					{t("components.user_profile.subtitle", { name: userId })}
				</p>
			</section>
		</main>
	);
}
