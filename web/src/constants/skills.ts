import type * as ReactSimpleIcons from "@icons-pack/react-simple-icons";
import type * as Lucide from "lucide-react";

export interface ISkill {
	id: "frontend" | "backend" | "mobile" | "database";
	icon: keyof typeof Lucide;
	stacks: (keyof typeof ReactSimpleIcons)[];
}

export const skills: ISkill[] = [
	{
		id: "frontend",
		icon: "Braces",
		stacks: [
			"SiJavascript",
			"SiTypescript",
			"SiNodedotjs",
			"SiReact",
			"SiNextdotjs",
			"SiVite",
			"SiTailwindcss",
			"SiStyledcomponents",
			"SiReactquery",
			"SiReactrouter",
			"SiAxios",
			"SiCypress",
			"SiSocketdotio",
		],
	},
	{
		id: "mobile",
		icon: "Smartphone",
		stacks: ["SiJavascript", "SiTypescript", "SiNodedotjs", "SiReact"],
	},
	{
		id: "backend",
		icon: "SwatchBook",
		stacks: [
			"SiJavascript",
			"SiTypescript",
			"SiNodedotjs",
			"SiNestjs",
			"SiFastify",
			"SiExpress",
			"SiVitest",
			"SiJest",
			"SiZod",
		],
	},
	{
		id: "database",
		icon: "Database",
		stacks: [
			"SiMysql",
			"SiSqlite",
			"SiMariadb",
			"SiPostgresql",
			"SiMongodb",
			"SiRedis",
			"SiPrisma",
			"SiSequelize",
		],
	},
];
