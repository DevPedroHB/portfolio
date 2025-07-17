import { InterceptingDialog } from "@/components/intercepting-dialog";
import { getTranslations } from "next-intl/server";

export default async function SignUpIntercepted() {
	const t = await getTranslations("app.sign_up");

	return (
		<InterceptingDialog>
			<section id="profile" className="container__section">
				<h2 className="section__title">{t("title")}</h2>
				<p className="section__subtitle">{t("title")}</p>
			</section>
		</InterceptingDialog>
	);
}
