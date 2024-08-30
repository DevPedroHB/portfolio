import type { Locales } from "@/constants/locales";
import { THEME_KEY } from "@/constants/storage-keys";
import { cn } from "@/functions/cn";
import { I18nProviderClient } from "@/locales/client";
import { getScopedI18n } from "@/locales/server";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
	const t = await getScopedI18n("metadata");

	return {
		title: {
			template: "%s | PedroHB",
			default: "PedroHB",
		},
		description: t("description"),
	};
}

interface IRootLayout {
	params: {
		locale: Locales;
	};
	children: ReactNode;
}

export default async function RootLayout({
	params: { locale },
	children,
}: Readonly<IRootLayout>) {
	return (
		<html
			lang={locale}
			className="scroll-smooth scrollbar-thin scrollbar-track-muted scrollbar-thumb-primary scrollbar-thumb-rounded-full"
			suppressHydrationWarning
		>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					poppins.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					storageKey={THEME_KEY}
					enableSystem
				>
					<I18nProviderClient locale={locale}>{children}</I18nProviderClient>
				</ThemeProvider>
			</body>
		</html>
	);
}
