"use client";

import { useRouter } from "next/navigation";
import { Link, type LinkProps } from "react-scroll";

interface IScrollLink extends Omit<LinkProps, "ref"> {}

export function ScrollLink({
	to,
	href,
	activeClass = "text-primary",
	...props
}: IScrollLink) {
	const router = useRouter();
	const hash = to.split("#")[1];

	function handleNavigation() {
		router.push(to ?? href);
	}

	return (
		<Link
			to={hash}
			href={to ?? href}
			activeClass={activeClass}
			onClick={handleNavigation}
			isDynamic
			hashSpy
			spy
			{...props}
		/>
	);
}
