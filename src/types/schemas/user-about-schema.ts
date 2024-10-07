import { z } from "zod";

export const userAboutSchema = z.object({
	profession: z
		.string()
		.min(3, { message: "A profissão deve ter pelo menos 3 caracteres." })
		.optional(),
	aboutMe: z.string().optional(),
	languageId: z
		.string({ required_error: "uma linguagem é obrigatória." })
		.cuid({
			message: "ID da linguagem inválido.",
		}),
});

export type UserAboutSchema = z.infer<typeof userAboutSchema>;
