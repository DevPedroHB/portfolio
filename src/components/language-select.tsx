"use client";

import { useFetchLanguage } from "@/hooks/use-fetch-languages";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

interface ILanguageSelect extends ComponentProps<typeof Select> {}

export function LanguageSelect(props: ILanguageSelect) {
	const { data, error } = useFetchLanguage();

	if (error) {
		toast.error("Não foi possível trazer as linguagens disponíveis.");

		return;
	}

	return (
		<Select {...props}>
			<SelectTrigger>
				<SelectValue placeholder="Selecione uma linguagem" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Linguagens</SelectLabel>
					{data?.map((language) => {
						return (
							<SelectItem key={language.id} value={language.id}>
								{language.name}
							</SelectItem>
						);
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
