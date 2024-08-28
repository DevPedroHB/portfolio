import { socialLinks } from "@/constants/social-links";
import * as RadixIcons from "@radix-ui/react-icons";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ScrollLink } from "./scroll-link";

interface IFooterLink {
	label: string;
	path: string;
}

export async function Footer() {
	const t = await getTranslations("footer");
	const links: IFooterLink[] = t.raw("links");

	return (
		<footer className="bg-primary px-6 pb-14 pt-12 text-primary-foreground">
			<div className="mx-auto flex max-w-3xl flex-wrap gap-6">
				<div>
					<h1 className="text-4xl font-semibold">{t("title")}</h1>
					<p className="text-sm">{t("subtitle")}</p>
				</div>
				<div className="flex flex-1 gap-8 md:justify-center">
					{links.map((link) => {
						return (
							<ScrollLink
								key={link.path}
								to={link.path}
								variant="footer"
								className="h-fit"
							>
								{link.label}
							</ScrollLink>
						);
					})}
				</div>
				<div className="flex justify-end gap-6">
					{socialLinks.map((link) => {
						const Icon = RadixIcons[link.icon];

						return (
							<Link
								key={link.icon}
								href={link.href}
								target="_blank"
								className="h-fit transition-all hover:brightness-75"
							>
								<Icon className="size-5" />
							</Link>
						);
					})}
				</div>
			</div>
			<div className="text- mt-12 flex justify-center text-sm brightness-75 md:mt-[4.5rem]">
				{t("copyright", {
					year: new Date().getFullYear(),
					site: "PedroHB",
				})}
			</div>
		</footer>
	);
}
