import { waitFor } from '@testing-library/react';
import { useCharacter } from './use-character';
import { describe, expect, test } from 'vitest';
import { customRenderHook } from '../../test-utils/custom-render';

describe('useCharacter Hook verification', () => {
  test('01 - should return character data when the API call is successful', async () => {
    const { result } = customRenderHook(() => useCharacter('1'));

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.character).toBeUndefined();
    expect(result.current.isError).toBeFalsy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();

      const character = result.current.character;

      if (!character) {
        throw new Error('character not found');
      }
      expect(character.id).toBe(1);
      expect(character.name.toLocaleLowerCase()).toBe('goku');
    });
  });

  test('02 - should return an error when the API call fails', async () => {
    const { result } = customRenderHook(() => useCharacter('1000'));

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.character).toBeUndefined();
    expect(result.current.isError).toBeFalsy();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isError).toBeTruthy();
      expect(result.current.character).toBeUndefined();
    });
  });
});
