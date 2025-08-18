import { describe, it, expect } from 'vitest';
import { applyQuantity } from './cartUtils';

describe('applyQuantity', () => {
  it('adds a new item to an empty cart', () => {
    const cart = {};
    const newItemId = 'product1';
    const newCart = applyQuantity(cart, newItemId, 1);
    expect(newCart[newItemId]).toBe(1);
  });

  it('updates the quantity of an existing item', () => {
    const cart = { product1: 1 };
    const newCart = applyQuantity(cart, 'product1', 3);
    expect(newCart.product1).toBe(3);
  });

  it('removes an item when quantity <= 0', () => {
    const cart = { product1: 2 };
    const newCart = applyQuantity(cart, 'product1', 0);
    expect(newCart).not.toHaveProperty('product1');
  });
});
