import { InterceptingDialog } from "@/components/intercepting-dialog";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

interface ISignUpIntercepted {
	params: Promise<{
		locale: Locale;
	}>;
}

export async function generateMetadata({
	params,
}: ISignUpIntercepted): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.sign_up" });

	return {
		title: t("title"),
	};
}

export default async function SignUpIntercepted({
	params,
}: ISignUpIntercepted) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.sign_up" });

	return (
		<InterceptingDialog>
			<section id="profile" className="container__section">
				<h2 className="section__title">{t("title")}</h2>
				<p className="section__subtitle">{t("title")}</p>
				<div className="flex-center gap-4">
					<Button type="button" asChild>
						<Link href="/auth/sign-in" replace>
							SignIn
						</Link>
					</Button>
					<Button type="button" asChild>
						<Link href="/auth/sign-up" replace>
							SignUp
						</Link>
					</Button>
				</div>
			</section>
		</InterceptingDialog>
	);
}
