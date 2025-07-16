import { formatKeyStorage } from "@/functions/format-key-storage";

export const keys = {
	THEME: formatKeyStorage("theme"),
	LOCALE: formatKeyStorage("locale"),
} as const;
