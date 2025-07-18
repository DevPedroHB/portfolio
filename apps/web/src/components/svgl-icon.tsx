"use client";

import * as SvglReact from "@ridemountainpig/svgl-react";
import { Dog } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface ISvglIcon extends ComponentProps<"svg"> {
	icon: keyof typeof SvglReact;
}

export function SvglIcon({ icon, ...props }: ISvglIcon) {
	const t = useTranslations("components.svgl_icon");
	const Icon = SvglReact[icon];

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

	const name = Icon.name.replaceAll("Light", "").replaceAll("Dark", "");

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Icon {...props} />
			</TooltipTrigger>
			<TooltipContent>{name}</TooltipContent>
		</Tooltip>
	);
}
