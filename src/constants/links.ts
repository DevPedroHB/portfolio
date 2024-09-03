import type * as ReactSimpleIcons from "@icons-pack/react-simple-icons";
import type * as Lucide from "lucide-react";

interface INavbarLink {
	icon: keyof typeof Lucide;
	path: "hero" | "about" | "skills" | "services" | "portfolio" | "contact";
}

export const navbarLinks: INavbarLink[] = [
	{
		icon: "Home",
		path: "hero",
	},
	{
		icon: "User2",
		path: "about",
	},
	{
		icon: "FileText",
		path: "skills",
	},
	{
		icon: "Briefcase",
		path: "services",
	},
	{
		icon: "Image",
		path: "portfolio",
	},
	{
		icon: "SendHorizontal",
		path: "contact",
	},
];

export const footerLinks = [
	"qualification",
	"new-project",
	"testimonial",
] as const;

interface ISocialLink {
	icon: keyof typeof ReactSimpleIcons;
	href: string;
}

export const socialLinks: ISocialLink[] = [
	{
		icon: "SiGithub",
		href: "https://github.com/DevPedroHB",
	},
	{
		icon: "SiLinkedin",
		href: "https://www.linkedin.com/in/devpedrohb",
	},
	{
		icon: "SiInstagram",
		href: "https://www.instagram.com/pedrohb.20",
	},
];
