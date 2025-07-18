"use client";

import { InstagramDark, InstagramLight } from "@ridemountainpig/svgl-react";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function InstagramIcon(props: ComponentProps<"svg">) {
	const { theme } = useTheme();

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				{theme === "light" ? (
					<InstagramLight {...props} />
				) : (
					<InstagramDark {...props} />
				)}
			</TooltipTrigger>
			<TooltipContent>Instagram</TooltipContent>
		</Tooltip>
	);
}
