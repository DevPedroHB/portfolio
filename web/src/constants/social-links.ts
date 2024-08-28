import type * as RadixIcons from "@radix-ui/react-icons";

interface ISocialLink {
	icon: keyof typeof RadixIcons;
	href: string;
}

export const socialLinks: ISocialLink[] = [
	{
		icon: "GitHubLogoIcon",
		href: "https://github.com/DevPedroHB",
	},
	{
		icon: "LinkedInLogoIcon",
		href: "https://www.linkedin.com/in/devpedrohb",
	},
	{
		icon: "InstagramLogoIcon",
		href: "https://www.instagram.com/pedrohb.20",
	},
];
