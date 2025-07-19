"use client";

import * as SvglReact from "@ridemountainpig/svgl-react";
import { Dog } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface ISvglIcon extends ComponentProps<"svg"> {
	icon: keyof typeof SvglReact;
}

export function SvglIcon({ icon, ...props }: ISvglIcon) {
	const t = useTranslations("components.svgl_icon");
	const { theme } = useTheme();

	const baseName = icon.replace(/Light$|Dark$/, "") as keyof typeof SvglReact;

	const themedIconName = (
		theme === "light" ? `${baseName}Light` : `${baseName}Dark`
	) as keyof typeof SvglReact;

	const Icon = SvglReact[themedIconName] ?? SvglReact[baseName];

	if (typeof Icon !== "function") {
		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Dog {...props} />
				</TooltipTrigger>
				<TooltipContent>{t("error")}</TooltipContent>
			</Tooltip>
		);
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				{theme === "light" ? <Icon {...props} /> : <Icon {...props} />}
			</TooltipTrigger>
			<TooltipContent>{baseName}</TooltipContent>
		</Tooltip>
	);
}
