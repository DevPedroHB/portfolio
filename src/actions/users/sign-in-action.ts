"use server";

import { signIn } from "@/auth";
import type { BuiltInProviderType } from "next-auth/providers";

export async function signInAction(provider: BuiltInProviderType) {
	await signIn(provider);
}
