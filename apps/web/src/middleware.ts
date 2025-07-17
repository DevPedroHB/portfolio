import createMiddleware from "next-intl/middleware";
import { auth } from "./auth";
import { routing } from "./i18n/routing";

const PUBLIC_PATHS = [
	"/auth/sign-in",
	"/auth/sign-up",
	"/terms-of-service",
	"/privacy-policy",
	"/dashboard/sign-in",
];
const PUBLIC_REGEX = new RegExp(
	`^\\/(?:${routing.locales.join("|")})?(?:${PUBLIC_PATHS.join("|")})?$`,
);

const nextIntlMiddleware = createMiddleware(routing);

export default auth(async (request) => {
	const response = nextIntlMiddleware(request);

	if (response && !response.ok) {
		return response;
	}

	const { pathname } = request.nextUrl;
	const session = request.auth;

	const isPublic = PUBLIC_REGEX.test(pathname);

	console.log("Middleware", JSON.stringify({ session, isPublic }, null, 2));

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
