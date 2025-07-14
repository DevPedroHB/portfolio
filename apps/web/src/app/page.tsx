import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Início",
};

export default function Home() {
	return (
		<main className="gap-4 min-h-screen col-center">
			<h1 className="font-extrabold text-4xl text-center text-balance tracking-tight scroll-m-20">
				Home
			</h1>
		</main>
	);
}
