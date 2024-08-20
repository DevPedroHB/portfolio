import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/constants/locales";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./languages/${locale}.json`)).default,
  };
});
