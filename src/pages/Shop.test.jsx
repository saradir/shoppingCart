import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import Shop from './Shop'

describe('Shop test', () => {
   
it('renders products', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: async () => [
        { id: '1', title: 'Test Product', price: 10 },
      ],
    })
  );

  render(
  <MemoryRouter>
  <Shop updateCartItem={() => {}} cart={{}} getCartItemQuantity={() => 0} catalogue={[{ id: '1', title: 'Test Product', price: 10 }]} />
  </MemoryRouter>
    );
  const product = await screen.findByText(/test product/i);
  expect(product).toBeInTheDocument();
});



})