import type { Prisma } from "@prisma/client";

export interface UserDetails
	extends Prisma.UserGetPayload<{
		select: {
			id: true;
			name: true;
			email: true;
			image: true;
			birthdate: true;
			role: true;
			createdAt: true;
			updatedAt: true;
			socialNetworks: {
				select: {
					id: true;
					url: true;
					icon: {
						select: {
							id: true;
							title: true;
							route: true;
							wordmark: true;
						};
					};
				};
			};
			userAbouts: {
				select: {
					id: true;
					profession: true;
					aboutMe: true;
				};
			};
		};
	}> {}
