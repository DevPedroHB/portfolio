import { TabsContent } from "@/components/ui/tabs";
import { qualifications } from "@/constants/qualifications";
import { getScopedI18n } from "@/locales/server";
import { getYear } from "date-fns";
import { Calendar } from "lucide-react";
import { QualificationTabs } from "./qualification-tabs";

export async function Qualification() {
	const t = await getScopedI18n("home.sections.qualification");

	return (
		<section id="qualification" className="pb-16 pt-8 md:pb-8 md:pt-24">
			<h2 className="text-center text-4xl font-semibold">{t("title")}</h2>
			<span className="mb-12 block text-center text-sm text-muted-foreground md:mb-16">
				{t("subtitle")}
			</span>
			<QualificationTabs>
				{qualifications.map((qualification) => {
					return (
						<TabsContent
							key={qualification.id}
							value={qualification.id}
							className="m-0"
						>
							{qualification.items.map((item, index) =>
								index % 2 === 0 ? (
									<div
										key={item.title}
										className="grid grid-cols-qualification gap-6"
									>
										<div>
											<h3 className="font-medium">{item.title}</h3>
											<p className="text-sm text-muted-foreground mb-4">
												{item.subtitle}
											</p>
											<span className="text-xs text-muted-foreground flex items-center gap-1">
												<Calendar className="size-3.5" />
												{getYear(item.date.from)} - {getYear(item.date.to)}
											</span>
										</div>
										<div>
											<span className="bg-primary inline-block size-[.8125rem] rounded-full" />
											<span className="bg-primary block translate-x-1.5 -translate-y-[.4375rem] h-full w-px" />
										</div>
									</div>
								) : (
									<div
										key={item.title}
										className="grid grid-cols-qualification gap-6"
									>
										<div />
										<div>
											<span className="bg-primary inline-block size-[.8125rem] rounded-full" />
											<span className="bg-primary block translate-x-1.5 -translate-y-[.4375rem] h-full w-px" />
										</div>
										<div>
											<h3 className="font-medium">{item.title}</h3>
											<p className="text-sm text-muted-foreground mb-4">
												{item.subtitle}
											</p>
											<span className="text-xs text-muted-foreground flex items-center gap-1">
												<Calendar className="size-3.5" />
												{getYear(item.date.from)} - {getYear(item.date.to)}
											</span>
										</div>
									</div>
								),
							)}
						</TabsContent>
					);
				})}
			</QualificationTabs>
		</section>
	);
}
