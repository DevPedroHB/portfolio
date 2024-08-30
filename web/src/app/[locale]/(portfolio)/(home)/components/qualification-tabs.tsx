"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { qualifications } from "@/constants/qualifications";
import { useScopedI18n } from "@/locales/client";
import * as Lucide from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import type { ReactNode } from "react";

interface IQualificationTabs {
	children: ReactNode;
}

export function QualificationTabs({ children }: IQualificationTabs) {
	const t = useScopedI18n("home.sections.qualification.tabs");
	const [qualification, setQualification] = useQueryState(
		"qualification",
		parseAsString.withDefault(qualifications[0].id),
	);

	return (
		<Tabs value={qualification} onValueChange={setQualification}>
			<TabsList className="mb-8 h-auto w-full justify-evenly bg-transparent p-0 md:justify-center">
				{qualifications.map((qualification) => {
					const Icon = Lucide[qualification.icon] as Lucide.LucideIcon;

					return (
						<TabsTrigger
							key={qualification.id}
							value={qualification.id}
							className="group gap-1 p-0 text-xl text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none md:mx-4"
						>
							<Icon className="size-6" />
							{t(qualification.id)}
						</TabsTrigger>
					);
				})}
			</TabsList>
			{children}
		</Tabs>
	);
}
