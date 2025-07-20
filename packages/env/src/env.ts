import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/v4";

export const env = createEnv({
	server: {
		AUTH_SECRET: z.string().min(32),
		AUTH_GITHUB_ID: z.string(),
		AUTH_GITHUB_SECRET: z.string(),
		DATABASE_URL: z.url(),
	},
	clientPrefix: "NEXT_PUBLIC_",
	client: {},
	shared: {},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
