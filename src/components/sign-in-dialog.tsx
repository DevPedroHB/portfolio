"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useScopedI18n } from "@/locales/client";
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
import type * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type { BuiltInProviderType } from "next-auth/providers";
import { type LiteralUnion, signIn } from "next-auth/react";

interface ISingInDialog extends AlertDialogPrimitive.AlertDialogTriggerProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export function SingInDialog({ open, onOpenChange, ...rest }: ISingInDialog) {
	const t = useScopedI18n("components.sign-in");

	async function handleSignIn(provider: LiteralUnion<BuiltInProviderType>) {
		await signIn(provider);
	}

	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogTrigger {...rest} />
			<AlertDialogContent className="max-w-xs">
				<AlertDialogHeader>
					<AlertDialogTitle>{t("title")}</AlertDialogTitle>
					<AlertDialogDescription>{t("description")}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction
						type="button"
						variant="outline"
						onClick={() => handleSignIn("github")}
						className="flex-1"
					>
						<SiGithub className="size-5" />
						Github
					</AlertDialogAction>
					<AlertDialogAction
						type="button"
						variant="outline"
						onClick={() => handleSignIn("google")}
						className="flex-1"
					>
						<SiGoogle className="size-5" />
						Google
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
