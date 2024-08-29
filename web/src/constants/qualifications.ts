import type * as Lucide from "lucide-react";

type TItem = {
	title: string;
	subtitle: string;
	date: {
		from: Date;
		to: Date;
	};
};

interface IQualification {
	id: "education" | "work";
	icon: keyof typeof Lucide;
	items: TItem[];
}

export const qualifications: IQualification[] = [
	{
		id: "education",
		icon: "GraduationCap",
		items: [
			{
				title: "Preparatório Militar",
				subtitle: "C.E.P.M - Centro de Educação Pré Militar",
				date: {
					from: new Date(2016, 0, 1),
					to: new Date(2018, 0, 1),
				},
			},
			{
				title: "Gestão Empresarial, Recursos Humanos, Marketing, Logística",
				subtitle: "Instituto Avanza de Educação Profissional",
				date: {
					from: new Date(2018, 0, 1),
					to: new Date(2019, 0, 1),
				},
			},
			{
				title: "Técnico em Informática",
				subtitle: "FIEC - Fundação Indaiatubana de Educação e Cultura",
				date: {
					from: new Date(2018, 0, 1),
					to: new Date(2019, 0, 1),
				},
			},
		],
	},
	{
		id: "work",
		icon: "Briefcase",
		items: [
			{
				title: "Estagiário de TI",
				subtitle: "FIEC - Fundação Indaiatubana de Educação e Cultura",
				date: {
					from: new Date(2020, 0, 1),
					to: new Date(2020, 0, 1),
				},
			},
			{
				title: "Desenvolvedor Web FullStack",
				subtitle: "FIEC - Fundação Indaiatubana de Educação e Cultura",
				date: {
					from: new Date(2020, 0, 1),
					to: new Date(2021, 0, 1),
				},
			},
			{
				title: "3º Sargento com qualificação militar em comunicações",
				subtitle:
					"Exército Brasileiro - 2⁰ Grupo de Artilharia de Campanha Leve",
				date: {
					from: new Date(2021, 0, 1),
					to: new Date(2024, 0, 1),
				},
			},
		],
	},
];
