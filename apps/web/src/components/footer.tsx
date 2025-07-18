import { footerLinks } from "@/constants/footer-links";
import { footerSocials } from "@/constants/footer-socials";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ScrollLink } from "./scroll-link";
import { SvglIcon } from "./svgl-icon";

export async function Footer() {
	const t = await getTranslations("components.footer");

	return (
		<footer className="pt-8">
			<div className="bg-primary pt-8 md:pt-12 pb-12 md:pb-14">
				<div className="flex flex-wrap justify-between gap-14 gap-x-6 gap-y-14 text-primary-foreground main__container">
					<div>
						<h1 className="font-semibold text-2xl md:text-4xl">{t("title")}</h1>
						<p className="text-xs md:text-sm">{t("subtitle")}</p>
					</div>
					<div className="flex flex-wrap flex-1 justify-start md:justify-center gap-x-8 gap-y-6">
						{footerLinks.map((link) => {
							return (
								<ScrollLink
									key={link.key}
									to={link.path}
									className="h-fit font-medium hover:text-primary-foreground/75 text-sm transition-all cursor-pointer"
									activeClass="text-primary-foreground/75"
								>
									{t(`footer_links.${link.key}`)}
								</ScrollLink>
							);
						})}
					</div>
					<div className="flex flex-wrap gap-6">
						{footerSocials.map((social) => {
							return (
								<Link key={social.key} href={social.link} target="_blank">
									<SvglIcon icon={social.icon} className="size-5" />
								</Link>
							);
						})}
					</div>
				</div>
				<div className="mt-12 md:mt-18 text-muted-foreground text-sm text-center">
					{t.rich("copyright", {
						year: new Date().getFullYear().toString(),
						link: (chunks) => (
							<Link
								href="/"
								className="hover:text-primary-foreground transition-all"
							>
								{chunks}
							</Link>
						),
					})}
				</div>
			</div>
		</footer>
	);
}
