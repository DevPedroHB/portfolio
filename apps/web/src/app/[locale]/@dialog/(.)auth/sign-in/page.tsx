import { AuthBanner } from "@/app/[locale]/auth/_components/auth-banner";
import { AuthTermsAndPolices } from "@/app/[locale]/auth/_components/auth-terms-and-polices";
import { SignInForm } from "@/app/[locale]/auth/sign-in/_components/sign-in-form";
import { InterceptingDialog } from "@/components/intercepting-dialog";

export default function SignInIntercepted() {
	return (
		<InterceptingDialog className="gap-0 grid grid-cols-1 md:grid-cols-2 p-0 w-full max-w-sm md:max-w-3xl overflow-hidden">
			<SignInForm>
				<AuthTermsAndPolices />
			</SignInForm>
			<AuthBanner
				src="/images/sign-in-banner.jpg"
				alt="Mesa com xícara de café, laptop mostrando gráfico de crescimento e luminária acesa em ambiente escuro"
				width={3648}
				height={5472}
			/>
		</InterceptingDialog>
	);
}
