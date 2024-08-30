"use client";

import { navbarLinks } from "@/constants/links";
import { useScopedI18n } from "@/locales/client";
import { useToggle } from "@uidotdev/usehooks";
import * as Lucide from "lucide-react";
import { ScrollLink } from "../scroll-link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function NavbarMobile() {
	const [open, setOpen] = useToggle(false);
	const t = useScopedI18n("navbar");

	function handleOpenChange() {
		setOpen(false);
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="md:hidden">
				<Lucide.LayoutGrid className="size-5 transition-all hover:text-primary" />
			</SheetTrigger>
			<SheetContent
				side="bottom"
				className="grid grid-cols-3 gap-8 rounded-t-xl px-6 py-8"
			>
				{navbarLinks.map((link) => {
					const Icon = Lucide[link.icon] as Lucide.LucideIcon;

					return (
						<ScrollLink
							key={link.path}
							variant="responsive"
							to={link.path}
							onClick={handleOpenChange}
						>
							<Icon className="size-5 md:hidden" />
							{t(`links.${link.path}`)}
						</ScrollLink>
					);
				})}
			</SheetContent>
		</Sheet>
	);
}
