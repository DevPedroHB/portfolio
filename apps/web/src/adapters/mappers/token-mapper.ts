import type { VerificationToken } from "@auth/core/adapters";
import type { Prisma, Token } from "@portfolio/db";

export class TokenMapper {
	static toAdapter(token: Token): VerificationToken {
		return {
			...token,
			expires: token.expiresAt,
		};
	}

	static toPrisma(token: VerificationToken): Prisma.TokenUncheckedCreateInput {
		return {
			...token,
			expiresAt: token.expires,
		};
	}
}
