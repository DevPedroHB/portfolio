"use client";

import { getQueryClient } from "@/functions/get-query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";

interface IReactQueryProvider {
	children: ReactNode;
}

export function ReactQueryProvider({ children }: IReactQueryProvider) {
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
