import { getScopedI18n } from "@/locales/server";
import type { Metadata } from "next";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { NewProject } from "./components/new-project";
import { Portfolio } from "./components/portfolio";
import { Qualification } from "./components/qualification";
import { Services } from "./components/services";
import { Skills } from "./components/skills";
import { Testimonial } from "./components/testimonial";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getScopedI18n("metadata");

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
			<NewProject />
			<Testimonial />
			<Contact />
		</main>
	);
}
