"use server";

import { prisma } from "@/libs/prisma";

export async function getProfile(userId: string, code: string) {
	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		select: {
			id: true,
			name: true,
			email: true,
			image: true,
			birthdate: true,
			role: true,
			createdAt: true,
			updatedAt: true,
			socialNetworks: {
				select: {
					id: true,
					url: true,
					icon: {
						select: {
							id: true,
							title: true,
							route: true,
							wordmark: true,
						},
					},
				},
			},
			userAbouts: {
				where: {
					language: {
						code,
					},
				},
				select: {
					id: true,
					profession: true,
					aboutMe: true,
				},
			},
		},
	});

	return user;
}
