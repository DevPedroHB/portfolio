"use client";

import { updateUser } from "@/actions/users/update-user";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate } from "@/functions/format-date";
import { useScopedI18n } from "@/locales/client";
import { type UserSchema, userSchema } from "@/types/schemas/user-schema";
import type { UserDetails } from "@/types/user-details";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { getYear, subYears } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";

const currentDate = new Date();

interface ISettingsFormUser {
	user: UserDetails;
}

export function SettingsUserForm({ user }: ISettingsFormUser) {
	const [parent] = useAutoAnimate();
	const t = useScopedI18n("settings.tabs.profile");
	const { isPending, execute } = useServerAction(updateUser);
	const form = useForm<UserSchema>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			name: user.name ?? undefined,
			birthdate: user.birthdate ?? undefined,
		},
	});

	async function handleUpdateUser(data: UserSchema) {
		const [_, error] = await execute(data);

		if (error) {
			toast.error("Houve um erro ao atualizar o seu perfil.");

			return;
		}

		toast.success("Seu perfil foi atualizado com sucesso.");
	}

	return (
		<Form {...form}>
			<form
				ref={parent}
				onSubmit={form.handleSubmit(handleUpdateUser)}
				className="flex flex-col gap-2 my-2"
			>
				<div className="flex gap-2">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>{t("fields.name.label")}</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder={t("fields.name.placeholder")}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="birthdate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("fields.birthdate.label")}</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Input
												type="text"
												value={
													field.value ? formatDate(field.value, "PPP") : ""
												}
												placeholder={t("fields.birthdate.placeholder")}
												readOnly
											/>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="p-0" align="start">
										<Calendar
											mode="single"
											captionLayout="dropdown-buttons"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date < subYears(currentDate, 100) || date > new Date()
											}
											fromYear={getYear(subYears(currentDate, 100))}
											toYear={getYear(currentDate)}
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{form.formState.isDirty && !form.formState.isSubmitted && (
					<Button type="submit" disabled={isPending} className="ml-auto">
						{isPending ? "Salvando..." : "Salvar alterações"}
					</Button>
				)}
			</form>
		</Form>
	);
}
