"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { ComponentProps } from "react";

interface ILocaleLink extends Omit<ComponentProps<typeof Link>, "href"> {
	href?: string;
}

export function LocaleLink({ href, ...props }: ILocaleLink) {
	const pathname = usePathname();

	return <Link href={href ?? pathname} {...props} />;
}
