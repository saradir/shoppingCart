import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('Cart component', () => {
  it('update product in cart', () => {
    render(<App />);
    App.updateCartItem('product1', 2);
    expect(getCartItemQuantity('product1')).toBe(2);
  });
});
