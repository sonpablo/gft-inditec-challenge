import { useRef } from 'react';
import { Spinner } from '../../components';
import { Characters, FormUsers } from '../list-characters/components';
import { useFavorites, useDBCharacters } from '../../hooks';
import { Character } from '../../models';

export const Favorites = () => {
  const showFavorites = useRef<boolean>(true);
  const { state } = useFavorites();
  const { characters, isLoading, getByName } = useDBCharacters();

  const handleSearch = (name: string) => {
    const hasName = !name;

    showFavorites.current = hasName;

    getByName(name);
  };

  const filterCharacters = () => {
    if (showFavorites.current) {
      return characters.filter((current: Character) =>
        state.includes(current.id)
      );
    }

    return characters;
  };

  return (
    <div className="list-characters">
      <h1>Favorites</h1>
      <FormUsers onSearch={handleSearch} />
      {isLoading && <Spinner />}
      <Characters characters={filterCharacters()} />
    </div>
  );
};
