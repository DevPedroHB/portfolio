"use server";

import { signIn } from "@/auth";
import { actionClient } from "@/libs/safe-action";
import { signInCredentialsSchema } from "@/types/schemas/sign-in-credentials-schema";
import { prisma } from "@portfolio/db";
import { compare } from "bcryptjs";
import { getTranslations } from "next-intl/server";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";

export const signInCredentialsAction = actionClient
	.metadata({ actionName: "signInCredentialsAction" })
	.inputSchema(signInCredentialsSchema)
	.action(async ({ parsedInput: { email, password } }) => {
		const t = await getTranslations("app.sign_in.form");
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (!user) {
			throw new InvalidCredentialsError();
		}

		if (!user.passwordHash) {
			throw new InvalidCredentialsError(t("error_email_exists_social"));
		}

		const isValidPassword = await compare(password, user.passwordHash);

		if (!isValidPassword) {
			throw new InvalidCredentialsError();
		}

		await signIn("credentials", user);
	});
