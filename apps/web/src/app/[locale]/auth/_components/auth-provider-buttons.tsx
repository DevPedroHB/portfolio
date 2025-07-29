"use client";

import { signInProviderAction } from "@/actions/account/sign-in-provider-action";
import { SvglIcon } from "@/components/svgl-icon";
import { Button } from "@/components/ui/button";
import { useActionErrorHandler } from "@/hooks/use-action-error-handler";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

export function AuthProviderButtons() {
	const t = useTranslations("components.auth.provider_buttons");
	const router = useRouter();

	const { execute, reset } = useAction(signInProviderAction, {
		onError({ error }) {
			useActionErrorHandler(error);
		},
		onNavigation() {
			toast.success(t("success"));

			reset();

			router.replace("/");
		},
	});

	return (
		<div className="gap-4 grid grid-cols-3">
			<Button
				type="button"
				variant="outline"
				onClick={() => execute("google")}
				className="w-full"
			>
				<SvglIcon icon="Google" className="size-6" />
			</Button>
			<Button
				type="button"
				variant="outline"
				onClick={() => execute("github")}
				className="w-full"
			>
				<SvglIcon icon="GitHubDark" className="size-6" />
			</Button>
			<Button
				type="button"
				variant="outline"
				onClick={() => execute("discord")}
				className="w-full"
			>
				<SvglIcon icon="Discord" className="size-6" />
			</Button>
		</div>
	);
}
