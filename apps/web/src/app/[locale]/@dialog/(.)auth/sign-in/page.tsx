import { SignInForm } from "@/app/[locale]/auth/sign-in/_components/sign-in-form";
import { InterceptingDialog } from "@/components/intercepting-dialog";
import { getTranslations } from "next-intl/server";

export default async function SignInIntercepted() {
	const t = await getTranslations("app.sign_in");

	return (
		<InterceptingDialog>
			<section id="profile" className="container__section">
				<h2 className="section__title">{t("title")}</h2>
				<p className="section__subtitle">{t("title")}</p>
				<SignInForm />
			</section>
		</InterceptingDialog>
	);
}
