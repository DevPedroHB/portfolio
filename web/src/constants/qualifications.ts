import { Briefcase, GraduationCap, LucideIcon } from "lucide-react";

type TQualificationsIds = "education" | "work";

type TQualification = {
  title: string;
  subtitle: string;
  description?: string;
  time: string;
};

interface IQualification {
  id: TQualificationsIds;
  icon: LucideIcon;
  qualifications: TQualification[];
}

export const qualifications: IQualification[] = [
  {
    id: "education",
    icon: GraduationCap,
    qualifications: [
      {
        title: "Preparatório Militar",
        subtitle: "C.E.P.M - Centro de Educação Pré Militar",
        time: "2016 - 2018",
      },
      {
        title: "Gestão Empresarial, Recursos Humanos, Marketing, Logística",
        subtitle: "Instituto Avanza de Educação Profissional",
        time: "2018 - 2019",
      },
      {
        title: "Técnico em Informática",
        subtitle: "FIEC - Fundação Indaiatubana de Educação e Cultura",
        time: "2018 - 2019",
      },
    ],
  },
  {
    id: "work",
    icon: Briefcase,
    qualifications: [
      {
        title: "Estagiário de TI",
        subtitle: "FIEC - Fundação Indaiatubana de Educação e Cultura",
        time: "2020 - 2020",
      },
      {
        title: "Desenvolvedor Web FullStack",
        subtitle: "FIEC - Fundação Indaiatubana de Educação e Cultura",
        time: "2020 - 2021",
      },
      {
        title: "Soldado com qualificação militar em Comunicações",
        subtitle: "Exército Brasileiro",
        time: "2021 - 2022",
      },
    ],
  },
];
