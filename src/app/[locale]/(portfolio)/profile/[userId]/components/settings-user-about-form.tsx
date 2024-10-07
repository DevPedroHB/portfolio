"use client";

import { upsertUserAbout } from "@/actions/user-abouts/upsert-user-about";
import { LanguageSelect } from "@/components/language-select";
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
import { Textarea } from "@/components/ui/textarea";
import { getQueryClient } from "@/functions/get-query-client";
import { useFetchUserAbouts } from "@/hooks/use-fetch-user-abouts";
import {
	type UserAboutSchema,
	userAboutSchema,
} from "@/types/schemas/user-about-schema";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";

export function SettingsUserAboutForm() {
	const { data: session } = useSession();

	if (!session) return;

	const { data: abouts, error } = useFetchUserAbouts(session.user.id);

	if (error) {
		toast.error("Não foi possível buscar as suas informações.");

		return;
	}

	const [parent] = useAutoAnimate();
	const { isPending, execute } = useServerAction(upsertUserAbout);
	const form = useForm<UserAboutSchema>({
		resolver: zodResolver(userAboutSchema),
		defaultValues: {
			languageId: abouts?.[0]?.languageId ?? undefined,
		},
	});

	async function handleUpsertUserAbout(data: UserAboutSchema) {
		const [_, error] = await execute(data);

		if (error) {
			toast.error("Houve um erro ao atualizar o suas informações.");

			return;
		}

		toast.success("Suas informações foi atualizado com sucesso.");

		getQueryClient().invalidateQueries({
			queryKey: ["user-abouts", session?.user.id],
		});
	}

	const selectedLanguageId = form.watch("languageId");

	useEffect(() => {
		if (selectedLanguageId) {
			const selectedAbout = abouts?.find(
				(about) => about.languageId === selectedLanguageId,
			);

			if (selectedAbout) {
				form.setValue("profession", selectedAbout.profession || "");
				form.setValue("aboutMe", selectedAbout.aboutMe || "");
			}
		}
	}, [selectedLanguageId, abouts, form]);

	return (
		<Form {...form}>
			<form
				ref={parent}
				onSubmit={form.handleSubmit(handleUpsertUserAbout)}
				className="flex flex-col gap-2 my-2"
			>
				<div className="flex gap-2">
					<FormField
						control={form.control}
						name="profession"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>Profissão</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="Qual sua profissão?"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="languageId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Linguagem</FormLabel>
								<FormControl>
									<LanguageSelect
										value={field.value}
										onValueChange={field.onChange}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="aboutMe"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Sobre mim</FormLabel>
							<FormControl>
								<Textarea placeholder="Fale um pouco sobre você." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{form.formState.isDirty && !form.formState.isSubmitted && (
					<Button type="submit" disabled={isPending} className="ml-auto">
						{isPending ? "Salvando..." : "Salvar alterações"}
					</Button>
				)}
			</form>
		</Form>
	);
}
