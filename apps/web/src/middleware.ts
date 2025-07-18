import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { auth } from "./auth";
import { keys } from "./constants/keys";
import { createLocalizedPathRegex } from "./functions/create-localized-path-regex";
import { routing } from "./i18n/routing";

const ALWAYS_PUBLIC_PATHS = ["/", "/email/verify"];
const PUBLIC_PATHS = ["/auth/*", "/terms-of-service", "/privacy-policy"];

const alwaysPublicRegex = createLocalizedPathRegex(
	routing.locales,
	ALWAYS_PUBLIC_PATHS,
);
const publicRegex = createLocalizedPathRegex(routing.locales, PUBLIC_PATHS);

const nextIntlMiddleware = createMiddleware(routing);

export default auth(async (request) => {
	const response = nextIntlMiddleware(request);

	if (!response.ok) {
		console.log("if (!response.ok) {");
		return response;
	}

	const lastPublicPath =
		request.cookies.get(keys.LAST_PUBLIC_PATH)?.value ?? ALWAYS_PUBLIC_PATHS[0];
	const lastPrivatePath =
		request.cookies.get(keys.LAST_PRIVATE_PATH)?.value ??
		ALWAYS_PUBLIC_PATHS[0];

	const { pathname } = request.nextUrl;

	const isAlwaysPublic = alwaysPublicRegex.test(pathname);

	if (isAlwaysPublic) {
		console.log("if (isAlwaysPublic) {");
		if (lastPublicPath !== pathname) {
			response.cookies.set(keys.LAST_PUBLIC_PATH, pathname);
		}

		if (lastPrivatePath !== pathname) {
			response.cookies.set(keys.LAST_PRIVATE_PATH, pathname);
		}

		return response;
	}

	const isPublic = publicRegex.test(pathname);

	const session = request.auth;

	if (isPublic) {
		console.log("if (isPublic) {");
		if (session) {
			console.log("if (session) {");
			return NextResponse.redirect(new URL(lastPrivatePath, request.url));
		}

		if (lastPublicPath !== pathname) {
			response.cookies.set(keys.LAST_PUBLIC_PATH, pathname);
		}

		return response;
	}

	if (!session) {
		console.log("if (!session) {");
		return NextResponse.redirect(new URL(lastPublicPath, request.url));
	}

	if (lastPrivatePath !== pathname) {
		response.cookies.set(keys.LAST_PRIVATE_PATH, pathname);
	}

	return response;
});

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
