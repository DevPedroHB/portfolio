import { auth } from "@/auth";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/functions/cn";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { hasLocale, type Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	display: "auto",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

interface IRootLayout {
	params: Promise<{
		locale: Locale;
	}>;
	children: ReactNode;
	dialog: ReactNode;
	sheet: ReactNode;
}

export async function generateMetadata({
	params,
}: IRootLayout): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "app" });

	return {
		title: {
			template: `%s | ${t("title")}`,
			default: t("title"),
		},
		description: t("description"),
	};
}

export default async function RootLayout({
	params,
	children,
	dialog,
	sheet,
}: Readonly<IRootLayout>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	const session = await auth();

	return (
		<html
			lang={locale}
			className={cn(
				"antialiased scroll-smooth",
				"scrollbar-thin scrollbar-thumb-primary scrollbar-track-card scrollbar-thumb-rounded-full scrollbar-track-rounded-full",
				"scrollbar-hover:scrollbar-thumb-primary/90 scrollbar-active:scrollbar-thumb-primary/90",
				poppins.variable,
			)}
			suppressHydrationWarning
		>
			<body>
				<SessionProvider session={session}>
					<NextIntlClientProvider>
						<ThemeProvider>
							{children}
							{dialog}
							{sheet}
							<ScrollToTop />
							<Toaster visibleToasts={9} closeButton richColors />
						</ThemeProvider>
					</NextIntlClientProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
