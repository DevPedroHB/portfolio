import { ScrollLink } from "@/components/scroll-link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/constants/social-links";
import * as RadixIcons from "@radix-ui/react-icons";
import { ArrowDown, Mouse, SendHorizontal } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { HeroBlob } from "./hero-blob";

export async function Hero() {
	const t = await getTranslations("home.sections.hero");

	return (
		<section id="hero" className="pb-16 pt-8 md:pb-8 md:pt-24">
			<div className="space-y-4 md:space-y-20">
				<div className="grid-cols-hero-responsive sm:grid-cols-hero grid items-center gap-6 pt-14 md:gap-8 md:pt-[5.5rem]">
					<div className="flex flex-col gap-4 lg:-translate-x-24">
						{socialLinks.map((link) => {
							const Icon = RadixIcons[link.icon];

							return (
								<Link
									key={link.icon}
									href={link.href}
									target="_blank"
									className="text-primary transition-all hover:text-primary/90"
								>
									<Icon className="size-5" />
								</Link>
							);
						})}
					</div>
					<div className="sm:order-1 sm:justify-self-center">
						<HeroBlob imageUrl="/images/perfil.png" />
					</div>
					<div className="col-span-3 sm:col-auto">
						<h1 className="text-5xl font-semibold">{t("title")}</h1>
						<h3 className="mb-3 text-nowrap text-xl font-medium text-muted-foreground">
							{t("subtitle")}
						</h3>
						<p className="mb-8 text-muted-foreground">{t("description")}</p>
						<Button type="button" asChild>
							<ScrollLink
								to="contact"
								className="w-fit hover:text-primary-foreground"
							>
								{t("contact-button")}
								<SendHorizontal className="size-5" />
							</ScrollLink>
						</Button>
					</div>
				</div>
				<div className="block">
					<ScrollLink
						to="about"
						className="flex w-fit items-center text-primary hover:translate-y-1 md:ml-12"
					>
						<Mouse className="size-7" />
						<span className="mr-1 text-foreground">
							{t("scroll-down-button")}
						</span>
						<ArrowDown className="size-4" />
					</ScrollLink>
				</div>
			</div>
		</section>
	);
}
