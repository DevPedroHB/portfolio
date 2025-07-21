import type { AdapterAuthenticator } from "@auth/core/adapters";
import type { Authenticator, Prisma } from "@portfolio/db";

export class AuthenticatorMapper {
	static toAdapter(authenticator: Authenticator): AdapterAuthenticator {
		return {
			...authenticator,
			credentialID: authenticator.credentialId,
		};
	}

	static toPrisma(
		authenticator: AdapterAuthenticator,
	): Prisma.AuthenticatorUncheckedCreateInput {
		return {
			...authenticator,
			credentialId: authenticator.credentialID,
		};
	}
}
