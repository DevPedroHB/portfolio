"use client";

import { cn } from "@/functions/cn";
import type { ComponentProps } from "react";
import { useWindowScroll } from "react-use";

interface IHeaderContainer extends ComponentProps<"header"> {}

export function HeaderContainer({ className, ...props }: IHeaderContainer) {
	const { y } = useWindowScroll();

	return (
		<header
			data-scroll={y > 0}
			className={cn(
				"md:top-0 not-md:bottom-0 z-50 fixed inset-x-0 bg-transparent backdrop-blur-xl",
				"data-[scroll=true]:shadow-header",
				className,
			)}
			{...props}
		/>
	);
}
