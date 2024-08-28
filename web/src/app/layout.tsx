import { cn } from "@/functions/cn";
import { formatKeyStorage } from "@/functions/format-key-storage";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("metadata");

	return {
		title: {
			template: "%s | PedroHB",
			default: "PedroHB",
		},
		description: t("description"),
	};
}

interface IRootLayout {
	children: ReactNode;
}

export default async function RootLayout({ children }: Readonly<IRootLayout>) {
	const locale = await getLocale();
	const messages = await getMessages();

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
					storageKey={formatKeyStorage("theme")}
					enableSystem
				>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
