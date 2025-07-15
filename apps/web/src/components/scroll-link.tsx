"use client";

import { usePathname, useRouter } from "next/navigation";
import { Link, type LinkProps } from "react-scroll";

interface IScrollLink extends Omit<LinkProps, "ref"> {}

export function ScrollLink({
	to,
	activeClass = "text-primary",
	...props
}: IScrollLink) {
	const router = useRouter();
	const pathname = usePathname();
	const [pathOnly, hash] = to.split("#");

	function handleNavigation() {
		if (pathOnly && pathname !== pathOnly) {
			router.push(to);
		}

		if (hash) {
			router.replace(`#${hash}`);
		}
	}

	return (
		<Link
			to={hash}
			activeClass={activeClass}
			onClick={handleNavigation}
			isDynamic
			hashSpy
			spy
			{...props}
		/>
	);
}
