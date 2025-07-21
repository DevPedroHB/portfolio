import type { VerificationToken } from "@auth/core/adapters";
import type { Prisma, Token } from "@portfolio/db";

export class TokenMapper {
	static toAdapter({ expiresAt, ...token }: Token): VerificationToken {
		return {
			...token,
			expires: expiresAt,
		};
	}

	static toPrisma({
		expires,
		...token
	}: VerificationToken): Prisma.TokenUncheckedCreateInput {
		return {
			...token,
			expiresAt: expires,
		};
	}
}
