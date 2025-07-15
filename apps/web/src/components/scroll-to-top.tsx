"use client";

import { cn } from "@/functions/cn";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { animateScroll } from "react-scroll";
import { useWindowScroll } from "react-use";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ScrollToTop() {
	const t = useTranslations("components.scroll_to_top");
	const { y } = useWindowScroll();

	function handleScrollToTop() {
		animateScroll.scrollToTop();
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					type="button"
					size="icon"
					onClick={handleScrollToTop}
					data-scroll={y >= 560}
					className={cn(
						"right-4 -bottom-1/5 z-40 fixed opacity-0 transition-all",
						"data-[scroll=true]:bottom-20 data-[scroll=true]:opacity-100",
					)}
				>
					<ArrowUp strokeWidth={3} className="size-5" />
				</Button>
			</TooltipTrigger>
			<TooltipContent>{t("tooltip_content")}</TooltipContent>
		</Tooltip>
	);
}
