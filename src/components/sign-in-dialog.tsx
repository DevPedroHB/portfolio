"use client";

import { signInAction } from "@/actions/users/sign-in-action";
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

interface ISingInDialog extends AlertDialogPrimitive.AlertDialogTriggerProps {}

export function SingInDialog(props: ISingInDialog) {
	const t = useScopedI18n("components.sign-in");

	return (
		<AlertDialog>
			<AlertDialogTrigger {...props} />
			<AlertDialogContent className="max-w-xs">
				<AlertDialogHeader>
					<AlertDialogTitle>{t("title")}</AlertDialogTitle>
					<AlertDialogDescription>{t("description")}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction
						type="button"
						variant="outline"
						onClick={() => signInAction("github")}
						className="flex-1"
					>
						<SiGithub className="size-5" />
						Github
					</AlertDialogAction>
					<AlertDialogAction
						type="button"
						variant="outline"
						onClick={() => signInAction("google")}
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
