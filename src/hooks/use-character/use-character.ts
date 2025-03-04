import { useQuery } from '@tanstack/react-query';
import { CharacterDetails } from '../../models/db-character-details';

const fetchCharacters = async (id: string): Promise<CharacterDetails> => {
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  if (!res.ok) throw new Error('Failed to fetch character');
  return res.json();
};

export const useCharacter = (id: string) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['characters', id],
    queryFn: () => fetchCharacters(id),
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
