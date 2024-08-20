import createMiddleware from "next-intl/middleware";
import { locales } from "@/constants/locales";
import { localePrefix } from "@/navigation";

export default createMiddleware({
  defaultLocale: locales[0],
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
