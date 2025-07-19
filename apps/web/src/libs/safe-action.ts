import { auth } from "@/auth";
import { getTranslations } from "next-intl/server";
import { createMiddleware, createSafeActionClient } from "next-safe-action";
import { z } from "zod/v4";

const loggingMiddleware = createMiddleware().define(
	async ({ next, clientInput, metadata }) => {
		const startTime = performance.now();

		const result = await next();

		const endTime = performance.now();

		console.log("Result ->", result);
		console.log("Client input ->", clientInput);
		console.log("Metadata ->", metadata);
		console.log(`Action execution took ${endTime - startTime} ms`);

		return result;
	},
);

const sessionMiddleware = createMiddleware().define(async ({ next }) => {
	const session = await auth();

	return next({
		ctx: {
			session,
		},
	});
});

export const actionClient = createSafeActionClient({
	defaultValidationErrorsShape: "flattened",
	defineMetadataSchema() {
		return z.object({
			actionName: z.string(),
		});
	},
	async handleServerError(error) {
		const t = await getTranslations("libs.safe_action");

		if (error instanceof TypeError) {
			return error.message;
		}

		console.error("Action error", JSON.stringify(error, null, 2));

		return t("server_error");
	},
})
	.use(loggingMiddleware)
	.use(sessionMiddleware);
