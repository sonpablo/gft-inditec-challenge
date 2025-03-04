import { createContext, ReactNode, useEffect, useState } from 'react';

type State = {
  state: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
};

const DEFAULT_STATE: State = {
  state: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

const FavoritesContext = createContext<State>(DEFAULT_STATE);

const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');

    if (storedFavorites) setState(JSON.parse(storedFavorites));
  }, []);

  const addFavorite = (id: number) => {
    const newFavorites = [...state, id];
    updateFavorites(newFavorites);
  };

  const removeFavorite = (id: number) => {
    const newFavorites = state.filter((current) => current !== id);
    updateFavorites(newFavorites);
  };

  const updateFavorites = (values: number[]) => {
    localStorage.setItem('favorites', JSON.stringify(values));
    setState(values);
  };

  return (
    <FavoritesContext.Provider value={{ state, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
