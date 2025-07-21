import type { AdapterSession } from "@auth/core/adapters";
import type { Prisma, Session } from "@portfolio/db";

export class SessionMapper {
	static toAdapter({ expiresAt, ...session }: Session): AdapterSession {
		return {
			...session,
			expires: expiresAt,
		};
	}

	static toPrisma({
		expires,
		...session
	}: AdapterSession): Prisma.SessionUncheckedCreateInput {
		return {
			...session,
			expiresAt: expires,
		};
	}
}
