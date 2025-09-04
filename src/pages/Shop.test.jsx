import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from './Shop'

describe('Shop test', () => {
    it('shows loading', () => { 
        let resolveFetch;
        global.fetch = vi.fn(() => {
            return new Promise(resolve => {
                resolveFetch = resolve;
            });
        });

    render(<Shop updateCartItem={() => {}} cart={{}} getCartItemQuantity={() => {}} />);
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
    

resolveFetch({
  ok: true,
  json: async () => [],
});

});
it('renders products after successful fetch', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: async () => [
        { id: '1', title: 'Test Product', price: 10 },
      ],
    })
  );

  render(<Shop updateCartItem={() => {}} cart={{}} getCartItemQuantity={() => 0} />);
  const product = await screen.findByText(/test product/i);
  expect(product).toBeInTheDocument();
});

it('shows error on fetch failure', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('network fail')));
    render(<Shop updateCartItem={() => {}} cart={{}} getCartItemQuantity={() => 0} />);

    const error = await screen.findByText(/A network error was encountered/i);
    expect(error).toBeInTheDocument();

})

})