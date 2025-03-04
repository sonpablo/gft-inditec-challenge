import { ReactNode } from 'react';
import { FavoritesProvider } from './favorites-provider';
import { QueryProvider } from './query-provider';
export const AppContext = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </QueryProvider>
  );
};
