import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartPane from './CartPane';
import { MemoryRouter } from "react-router-dom";

describe('test CartPane', () => {
  it('displays products in cart', async () => {
    const cart = { 1: 2 };
    const catalogue = [{ id: '1', title: 'Test Product', price: 10 }];
    const updateCart = vi.fn();
    render(
      <MemoryRouter>
      <CartPane cart={cart} catalogue={catalogue} updateCartItem={updateCart} />
      </MemoryRouter>
    );

    const productName = screen.getByText(/Test Product/i);
    const input = screen.getByRole('spinbutton'); 

    expect(productName).toBeInTheDocument();
    expect(input).toHaveValue(2);  });
  it('removes products from cart', async () => {
    const cart = { 1: 2 };
    const catalogue = [{ id: '1', title: 'Test Product', price: 10 }];
    const updateCart = vi.fn();
    render(
      <MemoryRouter>
      <CartPane cart={cart} catalogue={catalogue} updateCartItem={updateCart} />
      </MemoryRouter>
    );

    const removeBtn = screen.getByRole('button', { name: /remove item/i });
    fireEvent.click(removeBtn);

    expect(updateCart).toBeCalledWith('1', 0);
  });
});
