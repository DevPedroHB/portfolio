import type { Colors } from "@/constants/theme";
import colors from "tailwindcss/colors";

export function generateTheme(theme: "light" | "dark", color: Colors) {
  return colors[color];
}
