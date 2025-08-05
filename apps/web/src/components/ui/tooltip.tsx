"use client";

import { cn } from "@/functions/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import type * as React from "react";

function TooltipProvider({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return (
		<TooltipPrimitive.Provider
			data-slot="tooltip-provider"
			delayDuration={delayDuration}
			{...props}
		/>
	);
}

function Tooltip({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root data-slot="tooltip" {...props} />
		</TooltipProvider>
	);
}

function TooltipTrigger({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

const tooltipVariants = cva(
	"data-[side=left]:slide-in-from-right-2 data-[side=top]:slide-in-from-bottom-2 z-50 data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-2 px-3 py-1.5 rounded-md overflow-hidden text-xs animate-in data-[state=closed]:animate-out fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
	{
		variants: {
			variant: {
				light:
					"border border-border bg-background text-foreground shadow-md shadow-black/5",
				dark: "dark:border dark:border-border bg-zinc-950 text-white dark:bg-zinc-300 dark:text-black shadow-md shadow-black/5",
			},
		},
		defaultVariants: {
			variant: "dark",
		},
	},
);

function TooltipContent({
	className,
	sideOffset = 4,
	variant,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
	VariantProps<typeof tooltipVariants>) {
	return (
		<TooltipPrimitive.Content
			data-slot="tooltip-content"
			sideOffset={sideOffset}
			className={cn(tooltipVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
