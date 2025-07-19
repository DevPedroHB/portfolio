import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { AuthBanner } from "../_components/auth-banner";
import { AuthTermsAndPolices } from "../_components/auth-terms-and-polices";
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

export default function SignIn() {
	return (
		<main className="w-full max-w-sm md:max-w-3xl">
			<div className="flex flex-col gap-4">
				<Card className="p-0 overflow-hidden">
					<CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">
						<SignInForm />
						<AuthBanner
							src="/images/sign-in-banner.jpg"
							alt="Mesa com xícara de café, laptop mostrando gráfico de crescimento e luminária acesa em ambiente escuro"
							width={3648}
							height={5472}
						/>
					</CardContent>
				</Card>
				<AuthTermsAndPolices />
			</div>
		</main>
	);
}
