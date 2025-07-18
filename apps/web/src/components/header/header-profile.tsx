"use client";

import { languages } from "@/constants/languages";
import { themes } from "@/constants/themes";
import { Link, useRouter } from "@/i18n/navigation";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
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

export function HeaderProfile() {
	const { data: session } = useSession();
	const router = useRouter();
	const [dropdownMenu, setDropdownMenu] = useToggle(false);
	const [signOutAlertDialog, setSignOutAlertDialog] = useToggle(false);
	const t = useTranslations("components.header.header_profile");
	const locale = useLocale();
	const { theme, setTheme } = useTheme();

	useHotkeys("shift+p", () => router.push("/profile"), {
		enabled: dropdownMenu && !!session?.user,
	});
	useHotkeys("shift+e", () => router.push("/auth/sign-in"), {
		enabled: dropdownMenu && !session?.user,
	});
	useHotkeys("shift+s", setSignOutAlertDialog, {
		enabled: dropdownMenu && !!session?.user,
	});

	return (
		<DropdownMenu open={dropdownMenu} onOpenChange={setDropdownMenu}>
			<DropdownMenuTrigger className="rounded-md">
				<UserAvatar
					src={session?.user?.avatarUrl ?? undefined}
					alt={session?.user?.name ?? undefined}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel className="flex flex-col">
					<span className="truncate">
						{session?.user?.name ?? t("label.guest_name")}
					</span>
					<small className="font-normal text-muted-foreground text-xs truncate">
						{session?.user?.email ?? t("label.guest_email")}
					</small>
				</DropdownMenuLabel>
				{session?.user && (
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
					{session?.user ? (
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
