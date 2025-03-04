import { Routes, Route } from 'react-router';

import { ListDGCharacters } from './features/list-db-characters/list-db-characters';
import { CharacterDetails } from './features/character-details/character-details';
import { Favorites } from './features/favorites/favorites';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ListDGCharacters />} />
    <Route path="character/:id" element={<CharacterDetails />} />
    <Route path="favorites" element={<Favorites />} />
    <Route path="*" element={<ListDGCharacters />} />
  </Routes>
);
