import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    APP_URL: z.string().url().default("http://localhost:3000"),
  },

  client: {
    NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:3333"),
  },

  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
});
