import { Spinner } from '../../components/spinner/spinner';
import { Characters, FormUsers } from './components';
import { useDBCharacters } from './hooks/use-db-character/use-db-character';
import './list-db-characters.styles.css';

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
