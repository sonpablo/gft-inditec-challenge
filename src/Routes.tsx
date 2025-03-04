import { Routes, Route } from 'react-router';
import { Favorites, CharacterDetails, ListDGCharacters } from './features';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ListDGCharacters />} />
    <Route path="character/:id" element={<CharacterDetails />} />
    <Route path="favorites" element={<Favorites />} />
    <Route path="*" element={<ListDGCharacters />} />
  </Routes>
);
