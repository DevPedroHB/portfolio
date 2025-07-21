import type { AdapterAccount } from "@auth/core/adapters";
import type { Account, Prisma } from "@portfolio/db";

export class AccountMapper {
	static toAdapter({
		refreshToken,
		accessToken,
		expiresAt,
		tokenType,
		idToken,
		...account
	}: Account): AdapterAccount {
		return {
			...account,
			refresh_token: refreshToken,
			access_token: accessToken,
			expires_at: expiresAt,
			token_type: tokenType,
			id_token: idToken,
		} as unknown as AdapterAccount;
	}

	static toPrisma({
		refresh_token,
		access_token,
		expires_at,
		token_type,
		id_token,
		...account
	}: AdapterAccount): Prisma.AccountUncheckedCreateInput {
		return {
			...account,
			refreshToken: refresh_token,
			accessToken: access_token,
			expiresAt: expires_at,
			tokenType: token_type,
			idToken: id_token,
		};
	}
}
