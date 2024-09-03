import { createI18nMiddleware } from "next-international/middleware";
import type { NextRequest } from "next/server";
import { auth } from "./auth";
import { locales } from "./constants/locales";

const I18nMiddleware = createI18nMiddleware({
	locales,
	defaultLocale: locales[0],
});

export async function middleware(request: NextRequest) {
	return I18nMiddleware(request);
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
