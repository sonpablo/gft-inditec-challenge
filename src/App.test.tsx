import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.tsx';

import { describe, expect, test } from 'vitest';

describe('App verification', () => {
  test('01 - should render app', async () => {
    render(<App />);
    const noFavoritesIcon = screen.getByAltText('No favorites');
    expect(noFavoritesIcon).toBeInTheDocument();

    await waitFor(() => {
      const characterCards = screen.getAllByRole('article');
      expect(characterCards).toHaveLength(10);
      expect(screen.getByText(/results 10/i)).toBeInTheDocument();
    });
  });
});
