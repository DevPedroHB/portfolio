"use server";

import { LOCALE_COOKIE_KEY } from "@/constants/cookie-keys";
import { locales, type Locales } from "@/constants/locales";
import { getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function getUserLocale() {
  return getCookie(LOCALE_COOKIE_KEY, { cookies }) || locales[0];
}

export async function setUserLocale(locale: Locales) {
  setCookie(LOCALE_COOKIE_KEY, locale, { cookies });
}
