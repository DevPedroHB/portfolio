"use client";

import { type Locales, locales } from "@/constants/locales";
import {
	useChangeLocale,
	useCurrentLocale,
	useScopedI18n,
} from "@/locales/client";
import { Languages } from "lucide-react";
import {
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";

export function NavbarChangeLocale() {
	const t = useScopedI18n("navbar.profile-menu");
	const locale = useCurrentLocale();
	const setLocale = useChangeLocale({ preserveSearchParams: true });

	function handleChangeLocale(locale: string) {
		setLocale(locale as Locales);
	}

	return (
		<DropdownMenuSub>
			<DropdownMenuSubTrigger className="gap-1">
				<Languages className="size-4" />
				{t("labels.locales")}
			</DropdownMenuSubTrigger>
			<DropdownMenuPortal>
				<DropdownMenuSubContent>
					<DropdownMenuRadioGroup
						value={locale}
						onValueChange={handleChangeLocale}
					>
						{locales.map((locale) => {
							return (
								<DropdownMenuRadioItem key={locale} value={locale}>
									{t(`locales.${locale}`)}
								</DropdownMenuRadioItem>
							);
						})}
					</DropdownMenuRadioGroup>
				</DropdownMenuSubContent>
			</DropdownMenuPortal>
		</DropdownMenuSub>
	);
}
