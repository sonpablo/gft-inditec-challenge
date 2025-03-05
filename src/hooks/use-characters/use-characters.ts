import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Character, CharacterResponse } from '../../models';
import { apiFetch } from '../../lib/api-fetch';

const URL = 'https://dragonball-api.com/api/characters?limit=50';

type UseCharactersReturn = {
  characters: Character[];
  isLoading: boolean;
  error: Error | null;
  getByName: (name: string) => void;
  isSuccess: boolean;
};

export const useCharacters = (): UseCharactersReturn => {
  const [name, setName] = useState<string>('');

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ['characters'],
    queryFn: () => apiFetch<CharacterResponse>(URL),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const getByName = (name: string) => {
    setName(name);
  };

  const characters = name
    ? data?.items.filter((current: Character) =>
        current.name.toLowerCase().includes(name.toLowerCase())
      )
    : data?.items;

  return {
    characters: characters || [],
    isLoading,
    error,
    getByName,
    isSuccess,
  };
};
