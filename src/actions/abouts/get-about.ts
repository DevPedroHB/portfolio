"use server";

import { prisma } from "@/libs/prisma";

export async function getAbout(code: string) {
	const about = await prisma.about.findFirst({
		where: {
			language: {
				code,
			},
		},
		select: {
			id: true,
			content: true,
			startedAt: true,
			completedProjects: true,
			companiesWorked: true,
		},
	});

	return about;
}
