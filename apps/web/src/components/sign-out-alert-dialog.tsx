"use client";

import { signOutAction } from "@/actions/account/sign-out-action";
import { useActionErrorHandler } from "@/hooks/use-action-error-handler";
import { useTranslations } from "next-intl";
import { useAction } from "next-safe-action/hooks";
import type { ComponentProps } from "react";
import { toast } from "sonner";
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

	const { execute, reset } = useAction(signOutAction, {
		onError({ error }) {
			useActionErrorHandler(error);
		},
		onNavigation() {
			toast.success(t("success"));

			reset();

			window.location.reload();
		},
	});

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
					<AlertDialogAction variant="destructive" onClick={() => execute()}>
						{t("buttons.action")}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
