"use client";

import { type Locales, locales } from "@/constants/locales";
import { setUserLocale } from "@/functions/user-locale";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ChangeLocale() {
	const locale = useLocale();
	const t = useTranslations("locales");

	function handleChangeLocale(locale: string) {
		setUserLocale(locale as Locales);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Languages className="size-5 transition-all hover:text-primary" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={locale}
					onValueChange={handleChangeLocale}
				>
					{locales.map((locale) => {
						return (
							<DropdownMenuRadioItem key={locale} value={locale}>
								{t(locale)}
							</DropdownMenuRadioItem>
						);
					})}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
