import createMiddleware from "next-intl/middleware";
import { localePrefix } from "./navigation";
import { locales, defaultLocale } from "./config/locales";

export default createMiddleware({
  // for shared prefix eg en/about throughout
  localePrefix,
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(sw|en)/:path*"],
};
