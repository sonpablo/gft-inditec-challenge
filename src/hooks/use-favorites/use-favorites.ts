import { useContext } from 'react';
import { FavoritesContext } from '../../providers/favorites-provider';

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context)
    throw new Error('useFavorites must be used within FavoritesContext');

  return { ...context };
};
