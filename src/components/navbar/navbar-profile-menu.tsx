"use client";

import { useScopedI18n } from "@/locales/client";
import { useToggle } from "@uidotdev/usehooks";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import { SingInDialog } from "../sign-in-dialog";
import { SingOutDialog } from "../sign-out-dialog";
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
import { UserAvatar } from "../user-avatar";
import { UserHoverCard } from "../user-hover-card";
import { NavbarChangeLocale } from "./navbar-change-locale";
import { NavbarChangeTheme } from "./navbar-change-theme";

export function NavbarProfileMenu() {
	const [dropdownMenu, setDropdownMenu] = useToggle(false);
	const [signIn, setSignIn] = useToggle(false);
	const [signOut, setSignOut] = useToggle(false);
	const { data } = useSession();
	const router = useRouter();
	const t = useScopedI18n("navbar.profile-menu");
	const user = data?.user;

	useHotkeys("alt+p", () => router.push(`/profile/${data?.user.id}`), {
		enabled: !!user && dropdownMenu,
	});

	useHotkeys("alt+i", () => setSignIn(!signIn), {
		enabled: !user && dropdownMenu,
	});

	useHotkeys("alt+o", () => setSignOut(!signOut), {
		enabled: !!user && dropdownMenu,
	});

	return (
		<DropdownMenu open={dropdownMenu} onOpenChange={setDropdownMenu}>
			<UserHoverCard user={user} asChild>
				<DropdownMenuTrigger>
					<UserAvatar user={user} className="size-8" />
				</DropdownMenuTrigger>
			</UserHoverCard>
			<DropdownMenuContent>
				<DropdownMenuLabel>{t("labels.title")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{user && (
						<DropdownMenuItem asChild>
							<Link href={`/profile/${user.id}`}>
								{t("labels.profile")}
								<DropdownMenuShortcut>ALT+P</DropdownMenuShortcut>
							</Link>
						</DropdownMenuItem>
					)}
					<NavbarChangeLocale />
					<NavbarChangeTheme />
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				{user ? (
					<DropdownMenuItem asChild>
						<SingOutDialog
							open={signOut}
							onOpenChange={setSignOut}
							className="w-full"
						>
							{t("labels.sign-out")}
							<DropdownMenuShortcut>ALT+O</DropdownMenuShortcut>
						</SingOutDialog>
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem asChild>
						<SingInDialog
							open={signIn}
							onOpenChange={setSignIn}
							className="w-full"
						>
							{t("labels.sign-in")}
							<DropdownMenuShortcut>ALT+I</DropdownMenuShortcut>
						</SingInDialog>
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
