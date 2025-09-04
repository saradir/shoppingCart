import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartPane from './CartPane';

describe('test CartPane', () => {
  it('displays products in cart', async () => {
    const cart = { 1: 2 };
    const catalogue = [{ id: '1', title: 'Test Product', price: 10 }];
    const updateCart = vi.fn();
    render(
      <CartPane cart={cart} catalogue={catalogue} updateCartItem={updateCart} />
    );

    const productName = screen.getByText(/Test Product/i);
    const quantity = screen.getByText(/Qty:\s*2/i);

    expect(productName).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
  });
  it('removes products from cart', async () => {
    const cart = { 1: 2 };
    const catalogue = [{ id: '1', title: 'Test Product', price: 10 }];
    const updateCart = vi.fn();
    render(
      <CartPane cart={cart} catalogue={catalogue} updateCartItem={updateCart} />
    );

    const button = screen.getByRole('button', { name: /remove/i });
    await userEvent.click(button);

    expect(updateCart).toBeCalledWith('1', 0);
  });
});
