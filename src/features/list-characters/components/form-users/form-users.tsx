import { useState } from 'react';
import { Input, SearchIcon } from '../../../../ui';

type Props = {
  onSearch: (name: string) => void;
};

export const FormUsers = (props: Props) => {
  const { onSearch } = props;
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchValue || searchValue.length > 2) {
      onSearch(searchValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} data-testid="form-users">
      <Input
        placeholder="Search a character"
        prefix={<SearchIcon />}
        onChange={handleChange}
        value={searchValue}
      />
    </form>
  );
};
