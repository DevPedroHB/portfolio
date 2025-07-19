import { z } from "zod/v4";

export const signInCredentialsSchema = z.object({
	email: z.email(),
	password: z.string().min(6).max(32),
});

export type SignInCredentialsSchema = z.infer<typeof signInCredentialsSchema>;
