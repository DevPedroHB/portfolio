import {
	Briefcase,
	FileText,
	Home,
	Image,
	SendHorizontal,
	User2,
} from "lucide-react";

export const navbarLinks = [
	{
		key: "hero",
		icon: Home,
		path: "/#hero",
	},
	{
		key: "about_me",
		icon: User2,
		path: "/#about-me",
	},
	{
		key: "skills",
		icon: FileText,
		path: "/#skills",
	},
	{
		key: "services",
		icon: Briefcase,
		path: "/#services",
	},
	{
		key: "portfolio",
		icon: Image,
		path: "/#portfolio",
	},
	{
		key: "contact_me",
		icon: SendHorizontal,
		path: "/#contact-me",
	},
] as const;
