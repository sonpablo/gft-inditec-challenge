import { useQuery } from '@tanstack/react-query';
import { CharacterDetails } from '../../models/db-character-details';
import { apiFetch } from '../../lib/api-fetch';

type UseCharacterReturn = {
  character: CharacterDetails | undefined;
  isLoading: boolean;
  error: Error | null;
  isError: boolean;
};

export const useCharacter = (id: string): UseCharacterReturn => {
  const url = `https://dragonball-api.com/api/characters/${id}`;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['characters', id],
    queryFn: () => apiFetch<CharacterDetails>(url),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {
    character: data,
    isLoading,
    error,
    isError,
  };
};
