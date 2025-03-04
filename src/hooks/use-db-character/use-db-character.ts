import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Character, CharacterResponse } from '../../models';

const fetchCharacters = async (): Promise<CharacterResponse> => {
  const res = await fetch('https://dragonball-api.com/api/characters?limit=50');
  if (!res.ok) throw new Error('Failed to fetch characters');
  return res.json();
};

export const useDBCharacters = () => {
  const [name, setName] = useState<string>('');

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ['characters'],
    queryFn: () => fetchCharacters(),
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
