import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard';

describe('Product card', () => {
  it('updates cart', async () => {
    const updateCartItem = vi.fn();
    const user = userEvent.setup();
    render(
      <ProductCard
        product={{ id: '1', name: 'Test Product', price: 10 }}
        qty={0}
        updateCartItem={updateCartItem}
      />
    );

    const button = screen.getByRole('button', {name: 'Add to Cart'});
    const input = screen.getByLabelText(/Quantity:/i);
    fireEvent.change(input, { target: { value: '3' } });
    await user.click(button);

    expect(updateCartItem).toHaveBeenNthCalledWith(1, '1', 3);
  });
});
