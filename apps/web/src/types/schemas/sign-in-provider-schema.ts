import { authProviders } from "@/constants/auth-providers";
import { z } from "zod/v4";

export const signInProviderSchema = z.enum(authProviders);

export type SignInProviderSchema = z.infer<typeof signInProviderSchema>;
