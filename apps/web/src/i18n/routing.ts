import { keys } from "@/constants/keys";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["pt-BR", "en-US"],
	defaultLocale: "pt-BR",
	localeCookie: {
		name: keys.LOCALE,
	},
});
