import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {},
	client: {},
	shared: {
		NEXTAUTH_SECRET: z.string(),
		DATABASE_URL: z.string(),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
	},
	runtimeEnv: {
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		DATABASE_URL: process.env.DATABASE_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	},
	emptyStringAsUndefined: true,
});
