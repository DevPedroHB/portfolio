"use client";

import { formatDate } from "@/functions/format-date";
import { useScopedI18n } from "@/locales/client";
import type { User } from "@prisma/client";
import { capitalCase } from "change-case";
import Link from "next/link";
import type { ComponentProps } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { UserAvatar } from "./user-avatar";

interface IUserHoverCard extends ComponentProps<typeof HoverCardTrigger> {
	user?: User;
}

export function UserHoverCard({ user, ...rest }: IUserHoverCard) {
	const t = useScopedI18n("components.user-hover-card");
	const r = useScopedI18n("roles");

	if (!user) {
		return rest.children as JSX.Element;
	}

	return (
		<HoverCard>
			<HoverCardTrigger {...rest} />
			<HoverCardContent className="max-w-sm flex items-center gap-2" asChild>
				<Link href={`/profile/${user.id}`}>
					<UserAvatar user={user} className="size-14" />
					<div className="flex flex-col text-start flex-1 truncate">
						<h3
							title={user.name || t("name")}
							className="font-semibold text-sm truncate"
						>
							{user.name || t("name")}
						</h3>
						<p
							title={user.email}
							className="text-xs text-muted-foreground truncate"
						>
							{user.email}
						</p>
						<p
							title={formatDate(user.createdAt, "PPPPp")}
							className="text-xs text-muted-foreground truncate"
						>
							{t("info", {
								role: r(user.role),
								createdAt: capitalCase(formatDate(user.createdAt, "PP")),
							})}
						</p>
					</div>
				</Link>
			</HoverCardContent>
		</HoverCard>
	);
}
