"use client";

import { signOutAction } from "@/actions/users/sign-out-action";
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

interface ISingOutDialog extends AlertDialogPrimitive.AlertDialogTriggerProps {}

export function SingOutDialog(props: ISingOutDialog) {
	const t = useScopedI18n("components.sign-out");

	return (
		<AlertDialog>
			<AlertDialogTrigger {...props} />
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
						onClick={() => signOutAction()}
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
