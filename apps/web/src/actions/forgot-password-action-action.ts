"use server";

import { actionClient } from "@/libs/safe-action";
import { forgotPasswordSchema } from "@/types/schemas/forgot-password-schema";

export const forgotPasswordAction = actionClient
	.metadata({ actionName: "forgotPasswordAction" })
	.inputSchema(forgotPasswordSchema)
	.action(async ({ parsedInput }) => {
		return { parsedInput };
	});
