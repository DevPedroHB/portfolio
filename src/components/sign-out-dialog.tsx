"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useScopedI18n } from "@/locales/client";
import type * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { LogOut, X } from "lucide-react";
import { signOut } from "next-auth/react";

interface ISingOutDialog extends AlertDialogPrimitive.AlertDialogTriggerProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export function SingOutDialog({ open, onOpenChange, ...rest }: ISingOutDialog) {
	const t = useScopedI18n("components.sign-out");

	async function handleSignOut() {
		await signOut();
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
					<AlertDialogCancel type="button" className="flex-1">
						<X className="size-5" />
						{t("cancel-button")}
					</AlertDialogCancel>
					<AlertDialogAction
						type="button"
						variant="destructive"
						onClick={() => handleSignOut()}
						className="flex-1"
					>
						{t("sign-out-button")}
						<LogOut className="size-5" />
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
