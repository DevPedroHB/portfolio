"use client";

import { type Locales, locales } from "@/constants/locales";
import {
	useChangeLocale,
	useCurrentLocale,
	useScopedI18n,
} from "@/locales/client";
import { Languages } from "lucide-react";
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
	const t = useScopedI18n("locales");
	const locale = useCurrentLocale();
	const setLocale = useChangeLocale({ preserveSearchParams: true });

	function handleChangeLocale(locale: string) {
		setLocale(locale as Locales);
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
