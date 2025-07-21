import type { AdapterAccount } from "@auth/core/adapters";
import type { Account, Prisma } from "@portfolio/db";

export class AccountMapper {
	static toAdapter(account: Account): AdapterAccount {
		return {
			...account,
			refresh_token: account.refreshToken,
			access_token: account.accessToken,
			expires_at: account.expiresAt,
			token_type: account.tokenType,
			id_token: account.idToken,
		} as unknown as AdapterAccount;
	}

	static toPrisma(account: AdapterAccount): Prisma.AccountUncheckedCreateInput {
		return {
			...account,
			refreshToken: account.refresh_token,
			accessToken: account.access_token,
			expiresAt: account.expires_at,
			tokenType: account.token_type,
			idToken: account.id_token,
		};
	}
}
