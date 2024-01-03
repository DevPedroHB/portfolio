import { Braces, LucideIcon, Server } from "lucide-react";

type TSkillsIds = "frontend" | "backend";

type TTechnology = {
  name: string;
  level: number;
};

interface ISkill {
  id: TSkillsIds;
  icon: LucideIcon;
  technologies: TTechnology[];
}

export const skills: ISkill[] = [
  {
    id: "frontend",
    icon: Braces,
    technologies: [
      {
        name: "HTML",
        level: 90,
      },
      {
        name: "CSS",
        level: 80,
      },
      {
        name: "ReactJS",
        level: 85,
      },
      {
        name: "NextJS",
        level: 85,
      },
    ],
  },
  {
    id: "backend",
    icon: Server,
    technologies: [
      {
        name: "NodeJS",
        level: 85,
      },
    ],
  },
];
