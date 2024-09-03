"use client";

import { useScopedI18n } from "@/locales/client";
import { User2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { SingInDialog } from "../sign-in-dialog";
import { SingOutDialog } from "../sign-out-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { NavbarChangeLocale } from "./navbar-change-locale";
import { NavbarChangeTheme } from "./navbar-change-theme";

export function NavbarProfileMenu() {
	const t = useScopedI18n("navbar.profile-menu");
	const { data } = useSession();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-1.5">
				{data ? (
					<>
						<Avatar>
							<AvatarImage
								src={data?.user.image || ""}
								alt={data?.user.name || "User avatar"}
							/>
							<AvatarFallback>
								<User2 className="size-5" />
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col text-start">
							<h3 className="font-semibold text-sm">{data?.user.name}</h3>
							<p className="text-xs text-muted-foreground">
								{data?.user.email}
							</p>
						</div>
					</>
				) : (
					<User2 className="size-5 transition-all hover:text-primary" />
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{t("labels.title")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<NavbarChangeLocale />
					<NavbarChangeTheme />
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				{data ? (
					<DropdownMenuItem asChild>
						<SingOutDialog className="w-full">
							{t("labels.sign-out")}
							<DropdownMenuShortcut>ALT+O</DropdownMenuShortcut>
						</SingOutDialog>
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem asChild>
						<SingInDialog className="w-full">
							{t("labels.sign-in")}
							<DropdownMenuShortcut>ALT+I</DropdownMenuShortcut>
						</SingInDialog>
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
