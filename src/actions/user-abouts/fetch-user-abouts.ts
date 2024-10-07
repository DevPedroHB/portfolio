"use server";

import { prisma } from "@/libs/prisma";

export async function fetchUserAbouts(userId: string) {
	const userAbouts = await prisma.userAbout.findMany({
		where: {
			userId,
		},
		select: {
			id: true,
			profession: true,
			aboutMe: true,
			languageId: true,
		},
	});

	return userAbouts;
}
