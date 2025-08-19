import React, { useEffect, useState } from 'react';

const ProductCard = ({ product, qty, onCommit }) => {
  const [quantity, setQuantity] = useState(qty || 0);
  useEffect(() => {
    setQuantity(qty || 0);
  }, [qty]);
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <label htmlFor={`qty-${product.id}`}>Quantity:</label>
      <input
        id={`qty-${product.id}`}
        type="number"
        value={quantity}
        min="0"
        step="1"
        onChange={(e) => {
          const value = e.target.value;
          if (Number.isNaN(value) || value < 0) return; // Ensure valid input
          setQuantity(Number(value));
        }}
      />
      <button onClick={() => onCommit(product.id, quantity)}>
        {' '}
        {quantity > 0 ? 'Update' : 'Add to'} Cart{' '}
      </button>
    </div>
  );
};
export default ProductCard;
