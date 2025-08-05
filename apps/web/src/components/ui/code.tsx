"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/functions/cn";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, Copy } from "lucide-react";
import { Slot as SlotPrimitive } from "radix-ui";
import type * as React from "react";

export interface CodeProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof codeVariants> {
	asChild?: boolean;
	showCopyButton?: boolean;
	copyText?: string;
}

const codeVariants = cva(
	"relative bg-muted rounded-md font-mono font-medium text-sm",
	{
		variants: {
			variant: {
				default: "bg-muted text-muted-foreground",
				destructive: "bg-destructive/10 text-destructive",
				outline: "border border-border bg-background text-foreground",
			},
			size: {
				default: "text-sm px-2.5 py-1.5",
				sm: "text-xs px-2 py-1.5",
				lg: "text-base px-3 py-1.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Code({
	className,
	variant,
	size,
	asChild = false,
	showCopyButton = false,
	copyText,
	children,
	...props
}: CodeProps) {
	const { copy, copied } = useCopyToClipboard();
	const Comp = asChild ? SlotPrimitive.Slot : "code";
	const textToCopy = copyText || (typeof children === "string" ? children : "");

	return (
		<pre
			className={cn("inline-flex items-center gap-2", className)}
			data-slot="code"
		>
			<Comp
				data-slot="code-panel"
				className={cn(codeVariants({ variant, size }))}
				{...props}
			>
				{children}
			</Comp>
			{showCopyButton && textToCopy && (
				<Button
					type="button"
					mode="icon"
					size="sm"
					variant="ghost"
					className="opacity-60 hover:opacity-100 p-0 w-4 h-4"
					onClick={() => copy(textToCopy)}
				>
					{copied ? (
						<Check className="w-3 h-3" />
					) : (
						<Copy className="w-3 h-3" />
					)}
				</Button>
			)}
		</pre>
	);
}

export { Code, codeVariants };
