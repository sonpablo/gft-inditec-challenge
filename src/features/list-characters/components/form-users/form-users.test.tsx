import { render, screen, fireEvent } from '@testing-library/react';
import { FormUsers } from './form-users';
import { describe, expect, test, vi } from 'vitest';

describe('FormUsers Component verification', () => {
  test('01 - should calls onSearch with the correct value when form is submitted', async () => {
    const mockOnSearch = vi.fn();

    render(<FormUsers onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText(
      'Search a character'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'goku' } });

    expect(input.value).toBe('goku');

    const form = screen.getByTestId('form-users');
    fireEvent.submit(form);

    expect(mockOnSearch).toHaveBeenCalledWith('goku');
  });

  test('02 - should calls onSearch if search value is empty', async () => {
    const mockOnSearch = vi.fn();

    render(<FormUsers onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText(
      'Search a character'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });

    const form = screen.getByTestId('form-users');
    fireEvent.submit(form);

    expect(mockOnSearch).toHaveBeenCalledOnce();
  });

  test('03 - should not call onSearch if search value is less than or equal to 2 characters', async () => {
    const mockOnSearch = vi.fn();

    render(<FormUsers onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText(
      'Search a character'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Lu' } });

    const form = screen.getByTestId('form-users');
    fireEvent.submit(form);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
