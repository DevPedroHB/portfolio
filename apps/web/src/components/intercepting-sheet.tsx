"use client";

import { useInterceptingRoutes } from "@/hooks/use-intercepting-routes";
import type { ComponentProps } from "react";
import { Sheet, SheetContent } from "./ui/sheet";

interface IInterceptingSheet extends ComponentProps<typeof SheetContent> {
	fallbackPath?: string;
}

export function InterceptingSheet({
	fallbackPath = "/",
	...props
}: IInterceptingSheet) {
	const { navigateBackOrFallback } = useInterceptingRoutes(fallbackPath);

	return (
		<Sheet defaultOpen onOpenChange={navigateBackOrFallback}>
			<SheetContent {...props} />
		</Sheet>
	);
}
