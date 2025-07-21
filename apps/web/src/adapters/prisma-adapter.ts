import type { Adapter } from "@auth/core/adapters";
import { prisma } from "@portfolio/db";
import { AccountMapper } from "./mappers/account-mapper";
import { AuthenticatorMapper } from "./mappers/authenticator-mapper";
import { SessionMapper } from "./mappers/session-mapper";
import { TokenMapper } from "./mappers/token-mapper";
import { UserMapper } from "./mappers/user-mapper";

export function PrismaAdapter(): Adapter {
	return {
		async createAuthenticator(authenticator) {
			const newAuthenticator = await prisma.authenticator.create({
				data: AuthenticatorMapper.toPrisma(authenticator),
			});

			return AuthenticatorMapper.toAdapter(newAuthenticator);
		},

		async createSession(session) {
			const newSession = await prisma.session.create({
				data: SessionMapper.toPrisma(session),
			});

			return SessionMapper.toAdapter(newSession);
		},

		async createUser(user) {
			const newUser = await prisma.user.create({
				data: UserMapper.toPrisma(user),
			});

			return UserMapper.toAdapter(newUser);
		},

		async createVerificationToken(verificationToken) {
			const token = await prisma.token.create({
				data: TokenMapper.toPrisma(verificationToken),
			});

			return TokenMapper.toAdapter(token);
		},

		async deleteSession(sessionToken) {
			const session = await prisma.session.delete({
				where: { sessionToken },
			});

			return SessionMapper.toAdapter(session);
		},

		async deleteUser(id) {
			const user = await prisma.user.delete({
				where: { id },
			});

			return UserMapper.toAdapter(user);
		},

		async getAccount(providerAccountId, provider) {
			const account = await prisma.account.findUnique({
				where: { provider_providerAccountId: { providerAccountId, provider } },
			});

			if (!account) {
				return null;
			}

			return AccountMapper.toAdapter(account);
		},

		async getAuthenticator(credentialId) {
			const authenticator = await prisma.authenticator.findUnique({
				where: { credentialId },
			});

			if (!authenticator) {
				return null;
			}

			return AuthenticatorMapper.toAdapter(authenticator);
		},

		async getSessionAndUser(sessionToken) {
			const sessionAndUser = await prisma.session.findUnique({
				where: { sessionToken },
				include: { user: true },
			});

			if (!sessionAndUser) {
				return null;
			}

			const { user, ...session } = sessionAndUser;

			return {
				session: SessionMapper.toAdapter(session),
				user: UserMapper.toAdapter(user),
			};
		},

		async getUser(id) {
			const user = await prisma.user.findUnique({
				where: { id },
			});

			if (!user) {
				return null;
			}

			return UserMapper.toAdapter(user);
		},

		async getUserByAccount(provider_providerAccountId) {
			const account = await prisma.account.findUnique({
				where: { provider_providerAccountId },
				include: { user: true },
			});

			if (!account) {
				return null;
			}

			return UserMapper.toAdapter(account.user);
		},

		async getUserByEmail(email) {
			const user = await prisma.user.findUnique({
				where: { email },
			});

			if (!user) {
				return null;
			}

			return UserMapper.toAdapter(user);
		},

		async linkAccount(account) {
			const newAccount = await prisma.account.create({
				data: AccountMapper.toPrisma(account),
			});

			return AccountMapper.toAdapter(newAccount);
		},

		async listAuthenticatorsByUserId(userId) {
			const authenticators = await prisma.authenticator.findMany({
				where: { userId },
			});

			return authenticators.map(AuthenticatorMapper.toAdapter);
		},

		async unlinkAccount(provider_providerAccountId) {
			const account = await prisma.account.delete({
				where: { provider_providerAccountId },
			});

			return AccountMapper.toAdapter(account);
		},

		async updateAuthenticatorCounter(credentialId, counter) {
			const authenticator = await prisma.authenticator.update({
				where: { credentialId },
				data: { counter },
			});

			return AuthenticatorMapper.toAdapter(authenticator);
		},

		async updateSession({ sessionToken, ...session }) {
			const sessionUpdated = await prisma.session.update({
				where: { sessionToken },
				data: {
					...session,
					expiresAt: session.expires,
				},
			});

			return SessionMapper.toAdapter(sessionUpdated);
		},

		async updateUser({ id, ...user }) {
			const userUpdated = await prisma.user.update({
				where: { id },
				data: {
					...user,
					avatarUrl: user.image,
					emailVerifiedAt: user.emailVerified,
				},
			});

			return UserMapper.toAdapter(userUpdated);
		},

		async useVerificationToken(identifier_token) {
			const token = await prisma.token.delete({
				where: { identifier_token },
			});

			return TokenMapper.toAdapter(token);
		},
	};
}
