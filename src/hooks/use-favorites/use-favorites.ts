import { useContext } from 'react';
import { FavoritesContext } from '../../providers/favorites-provider';

type UseFavoritesReturn = {
  state: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
};

export const useFavorites = (): UseFavoritesReturn => {
  const context = useContext(FavoritesContext);

  if (!context)
    throw new Error('useFavorites must be used within FavoritesContext');

  return { ...context };
};
