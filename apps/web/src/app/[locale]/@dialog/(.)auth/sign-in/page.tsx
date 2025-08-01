import { AuthBanner } from "@/app/[locale]/auth/_components/auth-banner";
import { AuthTermsAndPolices } from "@/app/[locale]/auth/_components/auth-terms-and-polices";
import { SignInForm } from "@/app/[locale]/auth/sign-in/_components/sign-in-form";
import { InterceptingDialog } from "@/components/intercepting-dialog";
import { getTranslations } from "next-intl/server";

export default async function SignInIntercepted() {
	const t = await getTranslations("app.sign_in");

	return (
		<InterceptingDialog className="gap-0 grid grid-cols-1 md:grid-cols-2 p-0 w-full max-w-sm md:max-w-3xl overflow-hidden">
			<SignInForm>
				<AuthTermsAndPolices />
			</SignInForm>
			<AuthBanner
				src="/images/sign-in.png"
				alt={t("banner_alt")}
				width={512}
				height={768}
			/>
		</InterceptingDialog>
	);
}
