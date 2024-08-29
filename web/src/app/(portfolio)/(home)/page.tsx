import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { Qualification } from "./components/qualification";
import { Services } from "./components/services";
import { Skills } from "./components/skills";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("metadata");

	return {
		title: t("titles.home"),
	};
}

export default function Home() {
	return (
		<main className="mx-auto max-w-[calc(48rem+3rem)] px-6">
			<Hero />
			<About />
			<Skills />
			<Qualification />
			<Services />
			<Portfolio />
			<Contact />
		</main>
	);
}
