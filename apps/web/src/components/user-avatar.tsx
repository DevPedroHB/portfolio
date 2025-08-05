"use client";

import { cn } from "@/functions/cn";
import type { ComponentProps } from "react";
import { useIdle, useNetworkState } from "react-use";
import { UserIcon } from "./animate-ui/icons/user";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	AvatarIndicator,
	AvatarStatus,
} from "./ui/avatar";

interface IUserAvatar extends ComponentProps<typeof AvatarImage> {}

export function UserAvatar({ className, ...props }: IUserAvatar) {
	const idle = useIdle();
	const { online } = useNetworkState();

	const isPresent = (online ?? true) && !idle;

	return (
		<Avatar className="size-7">
			<AvatarImage className={cn("rounded-md", className)} {...props} />
			<AvatarFallback className="rounded-md">
				<UserIcon
					className="size-4 text-muted-foreground"
					animateOnHover
					loop
				/>
			</AvatarFallback>
			<AvatarIndicator className="-top-1 size-2.5 -end-1">
				<AvatarStatus
					variant={isPresent ? "online" : "offline"}
					className="size-full"
				/>
			</AvatarIndicator>
		</Avatar>
	);
}
