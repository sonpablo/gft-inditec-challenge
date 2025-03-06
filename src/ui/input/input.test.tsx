import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './input';
import { describe, expect, test, vi } from 'vitest';
import React from 'react';

describe('Input component verification', () => {
  test('01 - should renders input element', () => {
    render(<Input placeholder="Test input" />);

    const inputElement = screen.getByPlaceholderText(/Test input/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('02 - should renders prefix when passed as prop', () => {
    render(<Input prefix="$" placeholder="Amount" />);

    const prefixElement = screen.getByText('$');
    expect(prefixElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(/Amount/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('03 - should ref forwarded correctly', () => {
    const inputRef = React.createRef<HTMLInputElement>();

    render(<Input ref={inputRef} placeholder="Test input" />);

    expect(inputRef.current).not.toBeNull();
    expect(inputRef.current?.placeholder).toBe('Test input');
  });

  test('04 - should handles value and onChange correctly', () => {
    const handleChange = vi.fn();

    render(<Input value="Test" onChange={handleChange} />);

    const inputElement = screen.getByDisplayValue('Test');

    fireEvent.change(inputElement, { target: { value: 'New value' } });

    expect(handleChange).toHaveBeenCalledOnce();
  });
});
