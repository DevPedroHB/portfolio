export const locales = ["pt", "en"] as const;

export type Locales = (typeof locales)[number];
