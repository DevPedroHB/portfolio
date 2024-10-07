import { fetchUserAbouts } from "@/actions/user-abouts/fetch-user-abouts";
import { useQuery } from "@tanstack/react-query";

export function useFetchUserAbouts(userId: string) {
	const query = useQuery({
		queryKey: ["user-abouts", userId],
		queryFn: () => fetchUserAbouts(userId),
	});

	return query;
}
