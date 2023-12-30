import {
  Briefcase,
  FileText,
  Home,
  Image,
  LucideIcon,
  SendHorizontal,
  User2,
} from "lucide-react";

type TLinksIds =
  | "about"
  | "contact"
  | "home"
  | "portfolio"
  | "services"
  | "skills";

export interface INavLink {
  id: TLinksIds;
  icon: LucideIcon;
  path: string;
}

export const navLinks: INavLink[] = [
  {
    id: "home",
    icon: Home,
    path: "hero",
  },
  {
    id: "about",
    icon: User2,
    path: "about",
  },
  {
    id: "skills",
    icon: FileText,
    path: "skills",
  },
  {
    id: "services",
    icon: Briefcase,
    path: "services",
  },
  {
    id: "portfolio",
    icon: Image,
    path: "portfolio",
  },
  {
    id: "contact",
    icon: SendHorizontal,
    path: "contact",
  },
];
