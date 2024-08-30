"use client";

import { type Colors, type Themes, colors, themes } from "@/constants/theme";
import { useScopedI18n } from "@/locales/client";
import { useColorThemeStore } from "@/stores/use-color-theme-store";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";
import tailwindcssColors from "tailwindcss/colors";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";

export function ChangeTheme() {
	const t = useScopedI18n("theme");
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
		<DropdownMenu>
			<DropdownMenuTrigger>
				<SunMoon className="size-5 transition-all hover:text-primary" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>{t("themes.label")}</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
									{themes.map((theme) => {
										return (
											<DropdownMenuRadioItem key={theme} value={theme}>
												{t(`themes.${theme}`)}
											</DropdownMenuRadioItem>
										);
									})}
								</DropdownMenuRadioGroup>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>{t("colors.label")}</DropdownMenuSubTrigger>
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
													{t(`colors.${color}`)}
												</DropdownMenuRadioItem>
											);
										})}
									</DropdownMenuRadioGroup>
								</ScrollArea>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
