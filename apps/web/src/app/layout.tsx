import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	display: "auto",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | PedroHB",
		default: "PedroHB",
	},
	description: "Portfólio pessoal de Pedro Henrique Bérgamo.",
};

interface IRootLayout {
	children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
	return (
		<html
			lang="pt-BR"
			className={`${poppins.variable} antialiased scroll-smooth`}
			suppressHydrationWarning
		>
			<body>{children}</body>
		</html>
	);
}
