import { Moon, Sun, SunMoon } from "lucide-react";

export const themes = [
	{
		key: "light",
		icon: Sun,
	},
	{
		key: "dark",
		icon: Moon,
	},
	{
		key: "system",
		icon: SunMoon,
	},
] as const;
