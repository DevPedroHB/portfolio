"use client";

import { createI18nClient } from "next-international/client";

export const {
	I18nProviderClient,
	useI18n,
	useScopedI18n,
	useCurrentLocale,
	useChangeLocale,
} = createI18nClient({
	pt: () => import("./pt"),
	en: () => import("./en"),
});
