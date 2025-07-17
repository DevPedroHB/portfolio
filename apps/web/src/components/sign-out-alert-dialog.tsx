"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
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
} from "./ui/alert-dialog";

interface ISignOutAlertDialog
	extends ComponentProps<typeof AlertDialogTrigger> {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export function SignOutAlertDialog({
	open,
	onOpenChange,
	...props
}: ISignOutAlertDialog) {
	const t = useTranslations("components.sign_out_alert_dialog");

	async function handleSignOut() {
		await signOut();
	}

	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogTrigger {...props} />
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{t("title")}</AlertDialogTitle>
					<AlertDialogDescription>{t("description")}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>{t("buttons.cancel")}</AlertDialogCancel>
					<AlertDialogAction variant="destructive" onClick={handleSignOut}>
						{t("buttons.action")}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
