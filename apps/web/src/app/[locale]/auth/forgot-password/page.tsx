import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { AuthBanner } from "../_components/auth-banner";
import { AuthTermsAndPolices } from "../_components/auth-terms-and-polices";
import { ForgotPasswordForm } from "./_components/forgot-password-form";

interface IForgotPassword {
	params: Promise<{
		locale: Locale;
	}>;
}

export async function generateMetadata({
	params,
}: IForgotPassword): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.sign_in" });

	return {
		title: t("title"),
	};
}

export default async function ForgotPassword({ params }: IForgotPassword) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app.forgot_password" });

	return (
		<main className="w-full max-w-sm md:max-w-3xl">
			<div className="flex flex-col gap-4">
				<Card className="p-0 overflow-hidden">
					<CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">
						<AuthBanner
							src="/images/forgot-password.png"
							alt={t("banner_alt")}
							width={512}
							height={768}
						/>
						<ForgotPasswordForm />
					</CardContent>
				</Card>
				<AuthTermsAndPolices />
			</div>
		</main>
	);
}
