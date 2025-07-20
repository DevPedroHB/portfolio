import { AuthBanner } from "@/app/[locale]/auth/_components/auth-banner";
import { AuthTermsAndPolices } from "@/app/[locale]/auth/_components/auth-terms-and-polices";
import { ForgotPasswordForm } from "@/app/[locale]/auth/forgot-password/_components/forgot-password-form";
import { InterceptingDialog } from "@/components/intercepting-dialog";
import { getTranslations } from "next-intl/server";

export default async function ForgotPasswordIntercepted() {
	const t = await getTranslations("app.forgot_password");

	return (
		<InterceptingDialog className="gap-0 grid grid-cols-1 md:grid-cols-2 p-0 w-full max-w-sm md:max-w-3xl overflow-hidden">
			<AuthBanner
				src="/images/forgot-password.png"
				alt={t("banner_alt")}
				width={512}
				height={768}
			/>
			<ForgotPasswordForm>
				<AuthTermsAndPolices />
			</ForgotPasswordForm>
		</InterceptingDialog>
	);
}
