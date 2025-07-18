"use client";

import { GitHubDark, GitHubLight } from "@ridemountainpig/svgl-react";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function GitHubIcon(props: ComponentProps<"svg">) {
	const { theme } = useTheme();

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				{theme === "light" ? (
					<GitHubLight {...props} />
				) : (
					<GitHubDark {...props} />
				)}
			</TooltipTrigger>
			<TooltipContent>GitHub</TooltipContent>
		</Tooltip>
	);
}
