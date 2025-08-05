"use client";

import { cn } from "@/functions/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Avatar as AvatarPrimitive } from "radix-ui";
import type * as React from "react";

const avatarStatusVariants = cva(
	"flex items-center border-2 border-background rounded-full size-2",
	{
		variants: {
			variant: {
				online: "bg-green-600",
				offline: "bg-zinc-600 dark:bg-zinc-300",
				busy: "bg-yellow-600",
				away: "bg-blue-600",
			},
		},
		defaultVariants: {
			variant: "online",
		},
	},
);

function Avatar({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			className={cn("relative flex size-10 shrink-0", className)}
			{...props}
		/>
	);
}

function AvatarImage({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
	return (
		<div className={cn("relative rounded-full overflow-hidden", className)}>
			<AvatarPrimitive.Image
				data-slot="avatar-image"
				className={cn("w-full h-full aspect-square")}
				{...props}
			/>
		</div>
	);
}

function AvatarFallback({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cn(
				"flex justify-center items-center bg-accent border border-border rounded-full w-full h-full text-xs text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarIndicator({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			data-slot="avatar-indicator"
			className={cn(
				"absolute flex justify-center items-center size-6",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarStatus({
	className,
	variant,
	...props
}: React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof avatarStatusVariants>) {
	return (
		<div
			data-slot="avatar-status"
			className={cn(avatarStatusVariants({ variant }), className)}
			{...props}
		/>
	);
}

export {
	Avatar,
	AvatarFallback,
	AvatarImage,
	AvatarIndicator,
	AvatarStatus,
	avatarStatusVariants,
};
