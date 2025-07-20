import { z } from "zod/v4";

export const signUpCredentialsSchema = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string().min(6).max(32),
});

export type SignUpCredentialsSchema = z.infer<typeof signUpCredentialsSchema>;
