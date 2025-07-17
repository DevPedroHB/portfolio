"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function SignInForm() {
	async function handleSignIn(provider: string) {
		await signIn(provider);
	}
	return (
		<form>
			<Button type="button" onClick={() => handleSignIn("github")}>
				Sign In
			</Button>
		</form>
	);
}
