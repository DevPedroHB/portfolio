"use client";

import { type Colors, type Themes, colors, themes } from "@/constants/theme";
import { useScopedI18n } from "@/locales/client";
import { useColorThemeStore } from "@/stores/use-color-theme-store";
import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";
import tailwindcssColors from "tailwindcss/colors";
import {
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";

export function NavbarChangeTheme() {
	const t = useScopedI18n("navbar.profile-menu");
	const { theme, setTheme } = useTheme();
	const { color, setColor } = useColorThemeStore();

	const handleChangeColorTheme = useCallback(
		(colorSelected: string) => {
			setColor(
				theme === "system" ? "dark" : (theme as Exclude<Themes, "system">),
				{
					primary: colorSelected as Colors,
				},
			);
		},
		[setColor, theme],
	);

	useEffect(() => {
		if (color) {
			handleChangeColorTheme(color);
		}
	}, [color, handleChangeColorTheme]);

	return (
		<DropdownMenuSub>
			<DropdownMenuSubTrigger className="gap-1">
				{t("labels.theme")}
			</DropdownMenuSubTrigger>
			<DropdownMenuPortal>
				<DropdownMenuSubContent>
					<DropdownMenuGroup>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								{t("labels.themes")}
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuRadioGroup
										value={theme}
										onValueChange={setTheme}
									>
										{themes.map((theme) => {
											return (
												<DropdownMenuRadioItem key={theme} value={theme}>
													{t(`theme.themes.${theme}`)}
												</DropdownMenuRadioItem>
											);
										})}
									</DropdownMenuRadioGroup>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								{t("labels.colors")}
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<ScrollArea className="h-96 w-fit" type="scroll">
										<DropdownMenuRadioGroup
											value={color || "violet"}
											onValueChange={handleChangeColorTheme}
										>
											{colors.map((color) => {
												return (
													<DropdownMenuRadioItem
														key={color}
														value={color}
														style={{
															color: tailwindcssColors[color][500],
														}}
													>
														{t(`theme.colors.${color}`)}
													</DropdownMenuRadioItem>
												);
											})}
										</DropdownMenuRadioGroup>
									</ScrollArea>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
					</DropdownMenuGroup>
				</DropdownMenuSubContent>
			</DropdownMenuPortal>
		</DropdownMenuSub>
	);
}
