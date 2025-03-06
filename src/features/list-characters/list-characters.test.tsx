import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ListDGCharacters } from './list-characters';
import { describe, expect, test } from 'vitest';
import { customRender } from '../../test/test-utils/custom-render';

describe('ListDGCharacters feature verification', () => {
  test('01 - should filter character list', async () => {
    customRender(<ListDGCharacters />);

    expect(screen.getByRole('status')).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search a character');
    expect(searchInput).toBeInTheDocument();

    await userEvent.type(searchInput, 'goku');
    await userEvent.keyboard('{enter}');

    await waitFor(() => {
      const characterCards = screen.getAllByRole('article');

      expect(characterCards).toHaveLength(1);
      expect(characterCards[0]).toHaveTextContent(/goku/i);
      expect(screen.getByText(/Results 1/i)).toBeInTheDocument();
    });

    await userEvent.clear(searchInput);
    await userEvent.keyboard('{enter}');

    await waitFor(() => {
      const characterCards = screen.getAllByRole('article');

      expect(characterCards).toHaveLength(10);
    });
  });
});
