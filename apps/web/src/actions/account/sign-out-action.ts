"use server";

import { signOut } from "@/auth";
import { actionClient } from "@/libs/safe-action";

export const signOutAction = actionClient
	.metadata({ actionName: "signOutAction" })
	.action(async () => {
		await signOut();
	});
