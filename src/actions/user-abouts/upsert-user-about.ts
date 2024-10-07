"use server";

import { auth } from "@/auth";
import { prisma } from "@/libs/prisma";
import { userAboutSchema } from "@/types/schemas/user-about-schema";
import { createServerAction } from "zsa";

export const upsertUserAbout = createServerAction()
	.input(userAboutSchema)
	.handler(async ({ input }) => {
		const session = await auth();

		if (!session) {
			return;
		}

		try {
			await prisma.userAbout.upsert({
				where: {
					userId_languageId: {
						userId: session.user.id,
						languageId: input.languageId,
					},
				},
				create: {
					userId: session.user.id,
					...input,
				},
				update: input,
			});
		} catch (error) {
			console.log(error);
		}
	});
