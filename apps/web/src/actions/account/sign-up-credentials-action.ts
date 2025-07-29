"use server";

import { actionClient } from "@/libs/safe-action";
import { signUpCredentialsSchema } from "@/types/schemas/sign-up-credentials-schema";
import { prisma } from "@portfolio/db";
import { genSalt, hash } from "bcryptjs";
import { getTranslations } from "next-intl/server";
import { AlreadyExistsError } from "../errors/already-exists-error";

export const signUpCredentialsAction = actionClient
	.metadata({ actionName: "signUpCredentialsAction" })
	.inputSchema(signUpCredentialsSchema)
	.action(async ({ parsedInput: { name, email, password } }) => {
		const t = await getTranslations("app.sign_up.form");

		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (user) {
			if (!user.passwordHash) {
				throw new AlreadyExistsError(t("error_email_exists_social"));
			}

			throw new AlreadyExistsError();
		}

		const salt = await genSalt(10);
		const passwordHash = await hash(password, salt);

		const newUser = await prisma.user.create({
			data: { name, email, passwordHash },
		});

		await prisma.account.create({
			data: {
				provider: "credentials",
				providerAccountId: newUser.email,
				type: "credentials",
				userId: newUser.id,
			},
		});
	});
