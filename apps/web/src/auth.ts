import Credentials from "@auth/core/providers/credentials";
import { createId } from "@paralleldrive/cuid2";
import { prisma } from "@portfolio/db";
import { addDays } from "date-fns";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "./adapters/prisma-adapter";
import { keys } from "./constants/keys";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(),
	providers: [
		GitHub,
		Credentials({
			authorize(credentials) {
				return credentials;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account }) {
			if (account?.provider === "credentials") {
				if (!user.id) {
					return token;
				}

				const session = await prisma.session.create({
					data: {
						sessionToken: createId(),
						expiresAt: addDays(new Date(), 30),
						userId: user.id,
					},
				});

				token.sub = session.sessionToken;
			}

			return token;
		},
		session({ session }) {
			const { image, emailVerified, ...user } = session.user;

			return {
				...session,
				user: {
					...user,
					avatarUrl: image,
					emailVerifiedAt: emailVerified,
				},
			};
		},
	},
	jwt: {
		encode({ token }) {
			return token?.sub as unknown as string;
		},
	},
	pages: {
		signIn: "/auth/sign-in",
	},
	cookies: {
		callbackUrl: {
			name: keys.CALLBACK_URL,
		},
		csrfToken: {
			name: keys.CSRF_TOKEN,
		},
		sessionToken: {
			name: keys.SESSION_TOKEN,
		},
	},
});
