import { useCharacters } from '../../hooks';
import { Spinner } from '../../ui';
import { Characters, FormUsers } from './components';
import './list-characters.styles.css';

export const ListDGCharacters = () => {
  const { characters, isLoading, getByName } = useCharacters();

  const handleSearch = (name: string) => {
    getByName(name);
  };

  return (
    <div className="list-characters">
      <FormUsers onSearch={handleSearch} />
      {isLoading && <Spinner />}
      <Characters characters={characters} />
    </div>
  );
};
