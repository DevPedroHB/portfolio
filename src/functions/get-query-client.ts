import {
	QueryClient,
	defaultShouldDehydrateQuery,
	isServer,
} from "@tanstack/react-query";

/**
 * Creates a new instance of QueryClient with default options.
 *
 * This function is used to initialize a QueryClient instance for use in a React application.
 * It sets the default stale time for queries to 60 seconds and customizes the dehydration behavior
 * to include queries in the rehydration process if their status is "pending".
 *
 * @returns A new QueryClient instance with the specified default options.
 **/
function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
			},
			dehydrate: {
				shouldDehydrateQuery: (query) =>
					defaultShouldDehydrateQuery(query) ||
					query.state.status === "pending",
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined = undefined;

/**
 * Retrieves the QueryClient instance for the current environment.
 *
 * This function is used to obtain a QueryClient instance for use in a React application.
 * On the server-side, it creates a new instance using the `makeQueryClient` function.
 * On the client-side, it creates a new instance if it doesn't already exist and returns the existing instance.
 *
 * @returns A QueryClient instance for the current environment.
 */
export function getQueryClient() {
	if (isServer) {
		return makeQueryClient();
	}

	if (!browserQueryClient) browserQueryClient = makeQueryClient();

	return browserQueryClient;
}
