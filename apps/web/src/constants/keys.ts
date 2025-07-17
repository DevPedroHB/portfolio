import { formatKeyStorage } from "@/functions/format-key-storage";

export const keys = {
	THEME: formatKeyStorage("theme"),
	LOCALE: formatKeyStorage("locale"),
	LAST_PUBLIC_PATH: formatKeyStorage("last-public-path"),
	LAST_PRIVATE_PATH: formatKeyStorage("last-private-path"),
} as const;
