"use client";

import { Link as NextLink, usePathname } from "@/i18n/navigation";
import { Link, type LinkProps } from "react-scroll";

interface IScrollLink extends Omit<LinkProps, "ref"> {}

export function ScrollLink({
	to,
	href = to,
	activeClass = "text-primary",
	className,
	children,
	...props
}: IScrollLink) {
	const pathname = usePathname();
	const [path, hash] = to.split("#");

	if (pathname !== path) {
		return (
			<NextLink href={href} className={className}>
				{children}
			</NextLink>
		);
	}

	return (
		<Link
			to={hash}
			href={href}
			activeClass={activeClass}
			className={className}
			hashSpy
			isDynamic
			smooth
			spy
			{...props}
		>
			{children}
		</Link>
	);
}
