import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard';

describe('Product card', () => {
  it('updates cart', async () => {
    const onCommit = vi.fn();
    const user = userEvent.setup();
    render(
      <ProductCard
        product={{ id: '1', name: 'Test Product', price: 10 }}
        qty={0}
        onCommit={onCommit}
      />
    );

    const button = screen.getByRole('button');
    const input = screen.getByLabelText(/Quantity:/i);
    fireEvent.change(input, { target: { value: '3' } });
    await user.click(button);

    expect(onCommit).toHaveBeenNthCalledWith(1, '1', 3);
  });
});
