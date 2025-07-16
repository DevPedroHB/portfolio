"use client";

import { languages } from "@/constants/languages";
import { themes } from "@/constants/themes";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import { useToggle } from "react-use";
import { LocaleLink } from "../locale-link";
import { SignOutAlertDialog } from "../sign-out-alert-dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { UserAvatar } from "../user-avatar";

const session = {
	user: {
		name: "Pedro Henrique Bérgamo",
		email: "pedroh.bergamo20@gmail.com",
		avatarUrl: "https://github.com/DevPedroHB.png",
	},
};

export function HeaderProfile() {
	const router = useRouter();
	const [dropdownMenu, setDropdownMenu] = useToggle(false);
	const [signOutAlertDialog, setSignOutAlertDialog] = useToggle(false);
	const t = useTranslations("components.header.header_profile");
	const locale = useLocale();
	const { theme, setTheme } = useTheme();

	useHotkeys("shift+p", () => router.push("/profile"), {
		enabled: dropdownMenu && !!session,
	});
	useHotkeys("shift+e", () => router.push("/auth/sign-in"), {
		enabled: dropdownMenu && !session,
	});
	useHotkeys("shift+s", setSignOutAlertDialog, {
		enabled: dropdownMenu && !!session,
	});

	return (
		<DropdownMenu open={dropdownMenu} onOpenChange={setDropdownMenu}>
			<DropdownMenuTrigger asChild>
				<UserAvatar
					src={session?.user.avatarUrl ?? ""}
					alt={session?.user.name ?? ""}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel className="flex flex-col">
					<span className="truncate">
						{session?.user.name ?? t("label.guest_name")}
					</span>
					<small className="font-normal text-muted-foreground text-xs truncate">
						{session?.user.email ?? t("label.guest_email")}
					</small>
				</DropdownMenuLabel>
				{session && (
					<>
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<Link href="/profile">
									{t("profile")}
									<DropdownMenuShortcut>SHIFT+P</DropdownMenuShortcut>
								</Link>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
					</>
				)}
				<DropdownMenuGroup>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>{t("language")}</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuRadioGroup value={locale}>
								{languages.map((language) => {
									const Flag = language.flag;

									return (
										<LocaleLink key={language.key} locale={language.key}>
											<DropdownMenuRadioItem value={language.key}>
												{language.name}
												<DropdownMenuShortcut>
													<Flag />
												</DropdownMenuShortcut>
											</DropdownMenuRadioItem>
										</LocaleLink>
									);
								})}
							</DropdownMenuRadioGroup>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							{t("themes.trigger")}
						</DropdownMenuSubTrigger>
						<DropdownMenuSubContent>
							<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
								{themes.map((theme) => {
									const Icon = theme.icon;

									return (
										<DropdownMenuRadioItem key={theme.key} value={theme.key}>
											{t(`themes.${theme.key}`)}
											<DropdownMenuShortcut>
												<Icon />
											</DropdownMenuShortcut>
										</DropdownMenuRadioItem>
									);
								})}
							</DropdownMenuRadioGroup>
						</DropdownMenuSubContent>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{session ? (
						<DropdownMenuItem
							variant="destructive"
							onSelect={(e) => e.preventDefault()}
							asChild
						>
							<SignOutAlertDialog
								open={signOutAlertDialog}
								onOpenChange={setSignOutAlertDialog}
								className="w-full"
							>
								{t("sign_out")}
								<DropdownMenuShortcut>SHIFT+S</DropdownMenuShortcut>
							</SignOutAlertDialog>
						</DropdownMenuItem>
					) : (
						<DropdownMenuItem asChild>
							<Link href="/auth/sign-in">
								{t("sign_in")}
								<DropdownMenuShortcut>SHIFT+E</DropdownMenuShortcut>
							</Link>
						</DropdownMenuItem>
					)}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
