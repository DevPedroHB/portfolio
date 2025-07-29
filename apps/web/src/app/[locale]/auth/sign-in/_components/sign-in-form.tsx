"use client";

import { signInCredentialsAction } from "@/actions/account/sign-in-credentials-action";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/functions/cn";
import { useActionErrorHandler } from "@/hooks/use-action-error-handler";
import { Link } from "@/i18n/navigation";
import { signInCredentialsSchema } from "@/types/schemas/sign-in-credentials-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import { AuthProviderButtons } from "../../_components/auth-provider-buttons";

interface ISignInForm extends ComponentProps<"form"> {}

export function SignInForm({ className, children, ...props }: ISignInForm) {
	const t = useTranslations("app.sign_in.form");

	const { form, handleSubmitWithAction, resetFormAndAction } =
		useHookFormAction(
			signInCredentialsAction,
			zodResolver(signInCredentialsSchema),
			{
				actionProps: {
					onError({ error }) {
						useActionErrorHandler(error);
					},
					onNavigation() {
						toast.success(t("success"));

						resetFormAndAction();

						window.location.reload();
					},
				},
				formProps: {
					defaultValues: {
						email: "",
						password: "",
					},
				},
			},
		);

	const { isSubmitting } = form.formState;

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmitWithAction}
				className={cn("flex flex-col gap-4 p-6 md:p-8", className)}
				{...props}
			>
				<div className="text-center col__center">
					<h1 className="font-bold text-2xl">{t("title")}</h1>
					<p className="text-muted-foreground text-balance">{t("subtitle")}</p>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t("email.label")}</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder={t("email.placeholder")}
									required
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="justify-between">
								{t("password.label")}{" "}
								<Link
									href="/auth/forgot-password"
									className="hover:underline hover:underline-offset-2"
									replace
								>
									{t("forgot_password")}
								</Link>
							</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder={t("password.placeholder")}
									required
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isSubmitting} className="w-full">
					{t("submit")}
				</Button>
				<div className="after:top-1/2 after:z-0 after:absolute relative after:inset-0 after:flex after:items-center after:border-t after:border-border text-sm text-center">
					<span className="z-10 relative bg-card px-2 rounded text-muted-foreground">
						{t("sign_in_social")}
					</span>
				</div>
				<AuthProviderButtons />
				<div className="text-sm text-center">
					{t.rich("sign_up", {
						sign_up: (chunks) => (
							<Link
								href="/auth/sign-up"
								className="hover:text-primary underline underline-offset-4 transition-all"
								replace
							>
								{chunks}
							</Link>
						),
					})}
				</div>
				{children}
			</form>
		</Form>
	);
}
