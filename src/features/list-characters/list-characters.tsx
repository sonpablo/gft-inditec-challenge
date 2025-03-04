import { Spinner } from '../../components';
import { useDBCharacters } from '../../hooks';
import { Characters, FormUsers } from './components';
import './list-characters.styles.css';

export const ListDGCharacters = () => {
  const { characters, isLoading, getByName } = useDBCharacters();

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
