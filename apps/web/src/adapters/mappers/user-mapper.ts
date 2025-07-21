import type { AdapterUser } from "@auth/core/adapters";
import type { Prisma, User } from "@portfolio/db";

export class UserMapper {
	static toAdapter(user: User): AdapterUser {
		return {
			...user,
			image: user.avatarUrl,
			emailVerified: user.emailVerifiedAt,
		};
	}

	static toPrisma({
		id,
		...user
	}: AdapterUser): Prisma.UserUncheckedCreateInput {
		return {
			...user,
			avatarUrl: user.image,
			emailVerifiedAt: user.emailVerified,
		};
	}
}
