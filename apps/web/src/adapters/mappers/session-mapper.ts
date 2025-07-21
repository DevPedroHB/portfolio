import type { AdapterSession } from "@auth/core/adapters";
import type { Prisma, Session } from "@portfolio/db";

export class SessionMapper {
	static toAdapter(session: Session): AdapterSession {
		return {
			...session,
			expires: session.expiresAt,
		};
	}

	static toPrisma(session: AdapterSession): Prisma.SessionUncheckedCreateInput {
		return {
			...session,
			expiresAt: session.expires,
		};
	}
}
