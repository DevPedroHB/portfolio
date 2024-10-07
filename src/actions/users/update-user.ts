"use server";

import { auth } from "@/auth";
import { prisma } from "@/libs/prisma";
import { userSchema } from "@/types/schemas/user-schema";
import { createServerAction } from "zsa";

export const updateUser = createServerAction()
	.input(userSchema)
	.handler(async ({ input }) => {
		const session = await auth();

		if (!session) {
			return;
		}

		try {
			await prisma.user.update({
				where: {
					id: session.user.id,
				},
				data: input,
			});
		} catch (error) {
			console.log(error);
		}
	});
