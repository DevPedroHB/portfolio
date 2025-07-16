"use client";

import { cn } from "@/functions/cn";
import { User2 } from "lucide-react";
import type { ComponentProps } from "react";
import { useIdle, useNetworkState } from "react-use";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface IUserAvatar extends ComponentProps<typeof AvatarImage> {}

export function UserAvatar(props: IUserAvatar) {
	const idle = useIdle();
	const { online } = useNetworkState();

	const isPresent = (online ?? true) && !idle;

	return (
		<div className="relative">
			<Avatar className="rounded-md">
				<AvatarImage {...props} />
				<AvatarFallback className="rounded-md">
					<User2 className="size-4 text-muted-foreground" />
				</AvatarFallback>
			</Avatar>
			<div
				data-online={isPresent}
				className={cn(
					"-top-1 absolute bg-muted border-2 border-background rounded-full size-3 -end-1",
					"data-[online=false]:bg-red-500 data-[online=true]:bg-green-500",
				)}
			/>
		</div>
	);
}
