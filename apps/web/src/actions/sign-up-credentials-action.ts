"use server";

import { actionClient } from "@/libs/safe-action";
import { signUpCredentialsSchema } from "@/types/schemas/sign-up-credentials-schema";

export const signUpCredentialsAction = actionClient
	.metadata({ actionName: "signUpCredentialsAction" })
	.inputSchema(signUpCredentialsSchema)
	.action(async ({ parsedInput }) => {
		return { parsedInput };
	});
