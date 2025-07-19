"use server";

import { signIn } from "@/auth";
import { actionClient } from "@/libs/safe-action";
import { signInProviderSchema } from "@/types/schemas/sign-in-provider-schema";

export const signInProviderAction = actionClient
	.metadata({ actionName: "signInProviderAction" })
	.inputSchema(signInProviderSchema)
	.action(async ({ parsedInput: provider }) => {
		await signIn(provider);
	});
