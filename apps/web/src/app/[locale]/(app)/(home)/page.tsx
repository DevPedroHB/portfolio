import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { AboutMe } from "./_components/about-me";
import { ContactMe } from "./_components/contact-me";
import { Hero } from "./_components/hero";
import { NewProject } from "./_components/new-project";
import { Portfolio } from "./_components/portfolio";
import { Qualifications } from "./_components/qualifications";
import { Services } from "./_components/services";
import { Skills } from "./_components/skills";
import { Testimonials } from "./_components/testimonials";

interface IHome {
	params: Promise<{
		locale: Locale;
	}>;
}

export async function generateMetadata({ params }: IHome): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.home" });

	return {
		title: t("title"),
	};
}

export default function Home() {
	return (
		<main className="main__container">
			<Hero />
			<AboutMe />
			<Skills />
			<Qualifications />
			<Services />
			<Portfolio />
			<NewProject />
			<Testimonials />
			<ContactMe />
		</main>
	);
}
