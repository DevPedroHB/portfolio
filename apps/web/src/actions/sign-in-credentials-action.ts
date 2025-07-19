"use server";

import { actionClient } from "@/libs/safe-action";
import { signInCredentialsSchema } from "@/types/schemas/sign-in-credentials-schema";

export const signInCredentialsAction = actionClient
	.metadata({ actionName: "signInCredentialsAction" })
	.inputSchema(signInCredentialsSchema)
	.action(async ({ parsedInput }) => {
		return { parsedInput };
	});
