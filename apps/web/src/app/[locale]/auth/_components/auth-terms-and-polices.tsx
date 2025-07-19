import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function AuthTermsAndPolices() {
	const t = await getTranslations("components.auth");

	return (
		<p className="text-muted-foreground *:[a]:hover:text-primary text-xs text-center *:[a]:underline *:[a]:underline-offset-4 text-balance *:[a]:transition-all">
			{t.rich("terms_and_polices", {
				terms_of_service: (chunks) => (
					<Link href="/terms-of-service">{chunks}</Link>
				),
				privacy_policy: (chunks) => (
					<Link href="/privacy-policy">{chunks}</Link>
				),
			})}
		</p>
	);
}
