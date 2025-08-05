"use client";

import { cn } from "@/functions/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Dialog as DialogPrimitive } from "radix-ui";
import type * as React from "react";
import { XIcon } from "../animate-ui/icons/x";

const dialogContentVariants = cva(
	"z-50 fixed flex flex-col bg-background shadow-black/5 shadow-lg p-6 border border-border sm:rounded-lg outline-0 data-[state=closed]:animate-out data-[state=open]:animate-in duration-200 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
	{
		variants: {
			variant: {
				default:
					"left-[50%] top-[50%] max-w-lg translate-x-[-50%] translate-y-[-50%] w-full",
				fullscreen: "inset-5",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Dialog({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={cn(
				"z-50 fixed inset-0 bg-black/30 data-[state=closed]:animate-out data-[state=open]:animate-in [backdrop-filter:blur(4px)] data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				className,
			)}
			{...props}
		/>
	);
}

function DialogContent({
	className,
	children,
	showCloseButton = true,
	overlay = true,
	variant,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
	VariantProps<typeof dialogContentVariants> & {
		showCloseButton?: boolean;
		overlay?: boolean;
	}) {
	return (
		<DialogPortal>
			{overlay && <DialogOverlay />}
			<DialogPrimitive.Content
				data-slot="dialog-content"
				className={cn(dialogContentVariants({ variant }), className)}
				{...props}
			>
				{children}
				{showCloseButton && (
					<DialogClose className="top-5 absolute data-[state=open]:bg-accent opacity-60 hover:opacity-100 rounded-sm outline-0 focus:outline-hidden ring-offset-background data-[state=open]:text-muted-foreground transition-opacity cursor-pointer disabled:pointer-events-none end-5">
						<XIcon className="size-4" animateOnHover />
						<span className="sr-only">Close</span>
					</DialogClose>
				)}
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

export default DialogContent;

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		data-slot="dialog-header"
		className={cn(
			"flex flex-col space-y-1 mb-5 text-center sm:text-start",
			className,
		)}
		{...props}
	/>
);

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		data-slot="dialog-footer"
		className={cn(
			"flex sm:flex-row flex-col-reverse sm:justify-end sm:space-x-2.5 pt-5",
			className,
		)}
		{...props}
	/>
);

function DialogTitle({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn(
				"font-semibold text-lg leading-none tracking-tight",
				className,
			)}
			{...props}
		/>
	);
}

const DialogBody = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div data-slot="dialog-body" className={cn("grow", className)} {...props} />
);

function DialogDescription({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogBody,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
