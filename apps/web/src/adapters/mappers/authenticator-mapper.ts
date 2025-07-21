import type { AdapterAuthenticator } from "@auth/core/adapters";
import type { Authenticator, Prisma } from "@portfolio/db";

export class AuthenticatorMapper {
	static toAdapter({
		credentialId,
		...authenticator
	}: Authenticator): AdapterAuthenticator {
		return {
			...authenticator,
			credentialID: credentialId,
		};
	}

	static toPrisma({
		credentialID,
		...authenticator
	}: AdapterAuthenticator): Prisma.AuthenticatorUncheckedCreateInput {
		return {
			...authenticator,
			credentialId: credentialID,
		};
	}
}
