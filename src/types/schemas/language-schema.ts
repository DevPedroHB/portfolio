import { z } from "zod";

export const languageSchema = z.object({
	code: z
		.string()
		.min(2, { message: "O código deve ter pelo menos 2 caracteres." })
		.max(5, { message: "O código pode ter no máximo 5 caracteres." })
		.regex(/^[a-z]{2,5}$/i, { message: "O código deve conter apenas letras." }),

	name: z
		.string()
		.min(1, { message: "O nome é obrigatório." })
		.max(100, { message: "O nome pode ter no máximo 100 caracteres." }),
});

export type LanguageSchema = z.infer<typeof languageSchema>;
