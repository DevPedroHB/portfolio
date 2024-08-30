import { footerLinks, socialLinks } from "@/constants/links";
import { getScopedI18n } from "@/locales/server";
import * as ReactSimpleIcons from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { ScrollLink } from "./scroll-link";

export async function Footer() {
	const t = await getScopedI18n("footer");

	return (
		<footer className="bg-primary px-6 pb-14 pt-12 text-primary-foreground">
			<div className="mx-auto flex max-w-3xl flex-wrap gap-6">
				<div>
					<h1 className="text-4xl font-semibold">{t("title")}</h1>
					<p className="text-sm">{t("subtitle")}</p>
				</div>
				<div className="flex flex-1 gap-8 md:justify-center">
					{footerLinks.map((link) => {
						return (
							<ScrollLink
								key={link}
								to={link}
								variant="footer"
								className="h-fit"
							>
								{t(`links.${link}`)}
							</ScrollLink>
						);
					})}
				</div>
				<div className="flex justify-end gap-6">
					{socialLinks.map((link) => {
						const Icon = ReactSimpleIcons[
							link.icon
						] as ReactSimpleIcons.IconType;

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
