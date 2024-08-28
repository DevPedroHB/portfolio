import { Button } from "@/components/ui/button";
import { differenceInYears } from "date-fns";
import { Download } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface IInfo {
	name: string;
	title: string;
}

export async function About() {
	const t = await getTranslations("home.sections.about");
	const currentYear = new Date();
	const pastYear = new Date(2018, 0, 1);
	const yearsDiff = differenceInYears(currentYear, pastYear);
	const info: IInfo[] = t.raw("info");

	return (
		<section id="about" className="pb-16 pt-8 md:pb-8 md:pt-24">
			<h2 className="text-center text-4xl font-semibold">{t("title")}</h2>
			<span className="mb-12 block text-center text-sm text-muted-foreground md:mb-16">
				{t("subtitle")}
			</span>
			<div className="flex flex-wrap items-center gap-6 md:gap-20">
				<div className="relative flex flex-1 items-center justify-center">
					<Image
						src="https://github.com/DevPedroHB.png"
						alt="PedroHB"
						width={356}
						height={356}
						className="h-auto min-w-[12.5rem] max-w-[12.5rem] rounded object-cover object-top md:w-full md:max-w-full"
					/>
				</div>
				<div className="flex-1 space-y-10">
					<p className="text-center text-muted-foreground md:text-start">
						{t("description")}
					</p>
					<div className="flex justify-evenly md:justify-between">
						{info.map((i, index) => {
							return (
								<div key={i.name} className="flex flex-col text-center">
									<span className="text-2xl font-semibold">
										{t(`info.${index}.title`, { years: yearsDiff }).padStart(
											3,
											"0",
										)}
									</span>
									<span className="text-sm text-muted-foreground">
										{i.name}
									</span>
								</div>
							);
						})}
					</div>
					<div className="flex justify-center md:justify-start">
						<Button type="button" asChild>
							<a
								href="/pdfs/Currículo Pedro Henrique Bérgamo.pdf"
								download="Currículo Pedro Henrique Bérgamo.pdf"
							>
								{t("download-cv-button")}
								<Download className="size-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
