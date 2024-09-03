"use client";

import {
	SessionProvider as NextAuthSessionProvider,
	type SessionProviderProps,
} from "next-auth/react";

export function SessionProvider(props: SessionProviderProps) {
	return <NextAuthSessionProvider {...props} />;
}
