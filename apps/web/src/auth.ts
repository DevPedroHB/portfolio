import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "./adapters/prisma-adapter";
import { keys } from "./constants/keys";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(),
	providers: [GitHub],
	callbacks: {
		async session({ session }) {
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
