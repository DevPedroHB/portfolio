import { usePathname, useRouter } from "@/i18n/navigation";
import { useCallback, useEffect, useRef } from "react";

export function useInterceptingRoutes(fallbackPath = "/") {
	const router = useRouter();
	const pathname = usePathname();
	const pathnameRef = useRef(pathname);

	const navigateBackOrFallback = useCallback(() => {
		if (window.history.length > 1) {
			router.back();
		} else {
			router.push(fallbackPath);
		}
	}, [router, fallbackPath]);

	useEffect(() => {
		if (pathname !== pathnameRef.current) {
			navigateBackOrFallback();
		}
	}, [pathname, navigateBackOrFallback]);

	return {
		navigateBackOrFallback,
	};
}
