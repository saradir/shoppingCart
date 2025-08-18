import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('quantity badge', () => {
  it('shows badge when quantity >0', () => {
    render(
      <MemoryRouter>
        <Navbar cartQuantity={3} />
      </MemoryRouter>
    );
    const badge = screen.getByTestId('cart-count');
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toBe('3');
  });

  it('does not show badge when quantity is 0', () => {
    render(
      <MemoryRouter>
        <Navbar cartQuantity={0} />
      </MemoryRouter>
    );
    const badge = screen.queryByTestId('cart-count');
    expect(badge).not.toBeInTheDocument();
  });
});
