import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.tsx';

import { describe, expect, test } from 'vitest';

describe('App verification', () => {
  test('01 - should render app and handle favorites', async () => {
    render(<App />);
    const noFavorites = screen.getByAltText('No favorites');
    expect(noFavorites).toBeInTheDocument();

    await waitFor(() => {
      const characterCards = screen.getAllByRole('article');
      expect(characterCards).toHaveLength(10);
      expect(screen.getByText(/results 10/i)).toBeInTheDocument();
    });

    const firstCharacterCard = screen.getAllByRole('article')[0];
    const secondCharacterCard = screen.getAllByRole('article')[1];
    const firstFavoriteButton =
      firstCharacterCard.querySelector('.mark-as-favorite');
    const secondFavoriteButton =
      secondCharacterCard.querySelector('.mark-as-favorite');

    if (!firstFavoriteButton || !secondFavoriteButton) {
      throw new Error('Favorite button not found');
    }

    await userEvent.click(firstFavoriteButton);

    await waitFor(() => {
      const favoritesLink = screen.getByRole('link', { name: /favorite/i });
      expect(favoritesLink).toBeInTheDocument();
      expect(favoritesLink).toHaveAttribute('href', '/favorites');
    });

    await waitFor(() => {
      const favoritesCounter = screen.getByText('1', { selector: 'span' });
      expect(favoritesCounter).toBeInTheDocument();
    });

    await userEvent.click(secondFavoriteButton);

    await waitFor(() => {
      const favoritesCounter = screen.getByText('2', { selector: 'span' });
      expect(favoritesCounter).toBeInTheDocument();
    });

    await userEvent.click(firstFavoriteButton);
    await userEvent.click(secondFavoriteButton);

    await waitFor(() => {
      const noFavoritesIcon = screen.getByAltText('No favorites');
      expect(noFavoritesIcon).toBeInTheDocument();
    });
  });

  test('02 - should go to favorites and find a favorite', async () => {
    render(<App />);

    await waitFor(async () => {
      const firstCharacterCard = screen.getAllByRole('article')[0];
      const firstFavoriteButton =
        firstCharacterCard.querySelector('.mark-as-favorite');

      if (!firstFavoriteButton) {
        throw new Error('Favorite button not found');
      }
      await userEvent.click(firstFavoriteButton);

      const favoritesLink = screen.getByRole('link', { name: /favorite/i });
      await userEvent.click(favoritesLink);

      await waitFor(() => {
        expect(screen.getByText(/favorites/i)).toBeInTheDocument();
        expect(screen.getByText(/goku/i)).toBeInTheDocument();
      });
    });
  });
});
