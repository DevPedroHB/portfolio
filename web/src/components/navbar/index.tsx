"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import type * as Lucide from "lucide-react";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { ChangeLocale } from "../change-locale";
import { ChangeTheme } from "../change-theme";
import { ScrollLink } from "../scroll-link";
import { NavbarMobile } from "./navbar-mobile";

export interface INavbarLink {
	label: string;
	icon: keyof typeof Lucide;
	path: string;
}

export function Navbar() {
	const t = useTranslations("navbar");
	const links: INavbarLink[] = t.raw("links");
	const [scroll] = useWindowScroll();

	return (
		<header
			data-scroll={scroll.y && scroll.y > 0}
			className="data-[scroll=true]:shadow-nav fixed inset-x-0 bottom-0 z-10 h-12 rounded-none bg-background px-6 md:top-0 md:h-[4.5rem]"
		>
			<nav className="mx-auto flex h-full max-w-[60.5rem] items-center justify-between gap-4 p-0">
				<NextLink
					href="/"
					className="font-medium transition-all hover:text-primary"
				>
					{t("title")}
				</NextLink>
				<div className="hidden flex-1 justify-end gap-8 md:flex">
					{links.map((link) => {
						return (
							<ScrollLink key={link.path} to={link.path}>
								{link.label}
							</ScrollLink>
						);
					})}
				</div>
				<div className="flex gap-4">
					<ChangeLocale />
					<ChangeTheme />
					<NavbarMobile />
				</div>
			</nav>
		</header>
	);
}
