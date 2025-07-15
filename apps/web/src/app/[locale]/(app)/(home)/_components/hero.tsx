import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Hero() {
	const t = await getTranslations("app.home.components.hero");

	return (
		<section id="hero" className="container__section">
			<h2 className="section__title">{t("title")}</h2>
			<p className="section__subtitle">{t("subtitle")}</p>
			<div className="flex-center gap-4">
				<Button type="button" asChild>
					<Link href="/auth/sign-in">SignIn</Link>
				</Button>
				<Button type="button" asChild>
					<Link href="/auth/sign-up">SignUp</Link>
				</Button>
			</div>
		</section>
	);
}
