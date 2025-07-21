import type { AdapterUser } from "@auth/core/adapters";
import type { Prisma, User } from "@portfolio/db";

export class UserMapper {
	static toAdapter({ avatarUrl, emailVerifiedAt, ...user }: User): AdapterUser {
		return {
			...user,
			image: avatarUrl,
			emailVerified: emailVerifiedAt,
		};
	}

	static toPrisma({
		id,
		image,
		emailVerified,
		...user
	}: AdapterUser): Prisma.UserUncheckedCreateInput {
		return {
			...user,
			avatarUrl: image,
			emailVerifiedAt: emailVerified,
		};
	}
}
