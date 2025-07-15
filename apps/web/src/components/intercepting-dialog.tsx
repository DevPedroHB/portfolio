"use client";

import { useInterceptingRoutes } from "@/hooks/use-intercepting-routes";
import type { ComponentProps } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface IInterceptingDialog extends ComponentProps<typeof DialogContent> {
	fallbackPath?: string;
}

export function InterceptingDialog({
	fallbackPath = "/",
	...props
}: IInterceptingDialog) {
	const { navigateBackOrFallback } = useInterceptingRoutes(fallbackPath);

	return (
		<Dialog defaultOpen onOpenChange={navigateBackOrFallback}>
			<DialogContent {...props} />
		</Dialog>
	);
}
