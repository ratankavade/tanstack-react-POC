import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getCharacters } from "../api/charactersApi"

export const useCharacters = (page: number) => {
    return useQuery({
        queryKey: ['characters', page],
        queryFn: () => getCharacters(page),
        placeholderData: keepPreviousData,
        staleTime: 60 * 1000,
    });
}