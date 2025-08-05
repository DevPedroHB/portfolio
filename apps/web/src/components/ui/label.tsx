"use client";

import { cn } from "@/functions/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Label as LabelPrimitive } from "radix-ui";
import type * as React from "react";

const labelVariants = cva(
	"peer-disabled:opacity-50 text-foreground text-sm leading-none peer-disabled:cursor-not-allowed",
	{
		variants: {
			variant: {
				primary: "font-medium",
				secondary: "font-normal",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

function Label({
	className,
	variant,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants>) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(labelVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Label };
