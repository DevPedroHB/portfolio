import { z } from "zod";

export const userSchema = z.object({
	name: z
		.string({ required_error: "O nome é obrigatório." })
		.min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
	birthdate: z.date({
		required_error: "A data é obrigatória.",
		invalid_type_error: "Data deve ser uma data válida.",
	}),
});

export type UserSchema = z.infer<typeof userSchema>;
