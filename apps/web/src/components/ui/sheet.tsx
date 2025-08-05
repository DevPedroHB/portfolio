"use client";

import { cn } from "@/functions/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Dialog as SheetPrimitive } from "radix-ui";
import type * as React from "react";
import { XIcon } from "../animate-ui/icons/x";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
	return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
	...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
	return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
	...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
	return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
	...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
	return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
	return (
		<SheetPrimitive.Overlay
			data-slot="sheet-overlay"
			className={cn(
				"z-50 fixed inset-0 bg-black/30 data-[state=closed]:animate-out data-[state=open]:animate-in [backdrop-filter:blur(4px)] data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				className,
			)}
			{...props}
		/>
	);
}

const sheetVariants = cva(
	"z-50 fixed flex flex-col items-strech gap-4 bg-background shadow-lg p-6 transition data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-400 ease-in-out",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 start-0 h-full w-3/4 border-e data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm rtl:data-[state=closed]:slide-out-to-right rtl:data-[state=open]:slide-in-from-right",
				right:
					"inset-y-0 end-0 h-full w-3/4  border-s data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm rtl:data-[state=closed]:slide-out-to-left rtl:data-[state=open]:slide-in-from-left",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

interface SheetContentProps
	extends React.ComponentProps<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {
	overlay?: boolean;
	close?: boolean;
}

function SheetContent({
	side = "right",
	overlay = true,
	close = true,
	className,
	children,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & SheetContentProps) {
	return (
		<SheetPortal>
			{overlay && <SheetOverlay />}
			<SheetPrimitive.Content
				className={cn(sheetVariants({ side }), className)}
				{...props}
			>
				{children}
				{close && (
					<SheetPrimitive.Close
						data-slot="sheet-close"
						className="top-4 absolute data-[state=open]:bg-secondary opacity-60 hover:opacity-100 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-ring ring-offset-background focus:ring-offset-2 transition-opacity cursor-pointer disabled:pointer-events-none end-5"
					>
						<XIcon className="size-4" animateOnHover />
						<span className="sr-only">Close</span>
					</SheetPrimitive.Close>
				)}
			</SheetPrimitive.Content>
		</SheetPortal>
	);
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sheet-header"
			className={cn(
				"flex flex-col space-y-1 text-center sm:text-start",
				className,
			)}
			{...props}
		/>
	);
}

function SheetBody({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sheet-body"
			className={cn("py-2.5", className)}
			{...props}
		/>
	);
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sheet-footer"
			className={cn(
				"flex sm:flex-row flex-col-reverse sm:justify-end sm:space-x-2",
				className,
			)}
			{...props}
		/>
	);
}

function SheetTitle({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
	return (
		<SheetPrimitive.Title
			data-slot="sheet-title"
			className={cn("font-semibold text-foreground text-base", className)}
			{...props}
		/>
	);
}

function SheetDescription({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
	return (
		<SheetPrimitive.Description
			data-slot="sheet-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export {
	Sheet,
	SheetBody,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
};
