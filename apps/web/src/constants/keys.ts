import { formatKeyStorage } from "@/functions/format-key-storage";

export const keys = {
	THEME: formatKeyStorage("theme"),
	LOCALE: formatKeyStorage("locale"),
	CALLBACK_URL: formatKeyStorage("callback-url"),
	CSRF_TOKEN: formatKeyStorage("csrf-token"),
	SESSION_TOKEN: formatKeyStorage("session-token"),
	LAST_PUBLIC_PATH: formatKeyStorage("last-public-path"),
	LAST_PRIVATE_PATH: formatKeyStorage("last-private-path"),
} as const;
