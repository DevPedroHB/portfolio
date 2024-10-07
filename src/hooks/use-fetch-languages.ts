import { fetchLanguages } from "@/actions/languages/fetch-languages";
import { useQuery } from "@tanstack/react-query";

export function useFetchLanguage() {
	const query = useQuery({
		queryKey: ["languages"],
		queryFn: () => fetchLanguages(),
	});

	return query;
}
