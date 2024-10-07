"use client";

import { cn } from "@/functions/cn";
import type { Icon } from "@prisma/client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

export type SVGLThemeOptions = {
	light: string;
	dark: string;
};

interface ISvglIcon {
	icon: Pick<Icon, "title" | "route" | "wordmark" | "url">;
	className?: string;
	useWordmark?: boolean;
}

export function SvglIcon({ icon, className, useWordmark = false }: ISvglIcon) {
	const { theme, systemTheme } = useTheme();

	const getCurrentTheme = () => {
		if (theme === "system") {
			return systemTheme === "dark" ? "dark" : "light";
		}

		return theme === "dark" ? "dark" : "light";
	};

	const getIconSrc = () => {
		const currentTheme = getCurrentTheme();
		const source = (
			useWordmark && icon.wordmark ? icon.wordmark : icon.route
		) as string | SVGLThemeOptions;

		if (typeof source === "string") {
			return source;
		}

		return source[currentTheme];
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Link href={icon.url} target="_blank">
						<Image
							src={getIconSrc()}
							alt={icon.title}
							className={cn(className)}
							width={32}
							height={32}
						/>
					</Link>
				</TooltipTrigger>
				<TooltipContent>{icon.title}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
