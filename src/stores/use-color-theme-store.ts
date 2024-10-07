import { COLOR_THEME_KEY } from "@/constants/storage-keys";
import type { Colors, Themes } from "@/constants/theme";
import chroma from "chroma-js";
import twColors from "tailwindcss/colors";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import template from "../../template.json";

interface CustomColors {
	primary: Colors;
	secondary?: Colors;
	tertiary?: Colors;
	accent?: Colors;
	destructive?: Colors;
}

interface IColorThemeStore {
	color: Colors | undefined;
	setColor: (
		theme: Exclude<Themes, "system">,
		customColors: CustomColors,
	) => void;
}

export const useColorThemeStore = create<IColorThemeStore>()(
	persist(
		immer((set) => ({
			color: undefined,
			setColor(
				theme,
				{
					primary,
					secondary = "zinc",
					tertiary = "zinc",
					accent = "zinc",
					destructive = "red",
				},
			) {
				set((state) => {
					const colorMap = {
						primary,
						secondary,
						tertiary,
						accent,
						destructive,
					};

					const root = document.documentElement;

					for (const [key, value] of Object.entries(template[theme])) {
						const [color, tint] = value.split("-");
						const resolvedColor = colorMap[color as keyof CustomColors];
						const tailwindColorHex = (twColors as any)[resolvedColor][tint];

						root.style.setProperty(key, getHsl(tailwindColorHex));
					}

					state.color = primary;
				});
			},
		})),
		{
			name: COLOR_THEME_KEY,
		},
	),
);

/**
 * Converts a color from Hexadecimal to HSL format.
 *
 * @param color - The color to convert in Hexadecimal format.
 *
 * @returns The color in HSL format as a string. The format is "h, s%, l%", where h is the hue (0-360), s is the saturation (0-100%), and l is the lightness (0-100%).
 **/
export function getHsl(color: string) {
	const chromaColor = chroma(color);
	const hsl = chromaColor.css("hsl").replace(/^hsl\(|\)$/g, "");

	return hsl;
}
