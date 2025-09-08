import React, { useEffect, useState } from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, qty, onCommit }) => {
  const id = product.id;
  const [quantity, setQuantity] = useState(qty || 0);
  useEffect(() => {
    setQuantity(qty || 0);
  }, [qty]);
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={product.image}></img>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <label htmlFor={`qty-${product.id}`}>Quantity:</label>
      <input
        id={`qty-${product.id}`}
        type="number"
        value={quantity}
        min="0"
        step="1"
        onChange={(e) => {
          const value = Number(e.target.value);
          if (Number.isNaN(value) || value < 0) return; // Ensure valid input
          setQuantity(Number(value));
        }}
      />
      <button onClick={() => onCommit(id, quantity)}>
        {' '}
        {quantity > 0 ? 'Update' : 'Add to'} Cart{' '}
      </button>
    </div>
  );
};
export default ProductCard;
