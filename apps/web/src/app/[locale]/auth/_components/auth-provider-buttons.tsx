"use client";

import { signInProviderAction } from "@/actions/sign-in-provider-action";
import { SvglIcon } from "@/components/svgl-icon";
import { Button } from "@/components/ui/button";
import { useActionErrorHandler } from "@/hooks/use-action-error-handler";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

export function AuthProviderButtons() {
	const { execute } = useAction(signInProviderAction, {
		async onError({ error }) {
			useActionErrorHandler(error);
		},
		async onSuccess() {
			toast.success("Signed in successfully.");
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
