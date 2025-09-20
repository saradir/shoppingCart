import React, { useEffect, useState } from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, qty, onCommit }) => {
  const id = product.id;
  const [quantity, setQuantity] = useState(qty || 0);
  const increase = () => setQuantity( (q) => q + 1);
  const decrease = () => setQuantity( (q) => q - 1);
  useEffect(() => {
    setQuantity(qty || 0);
  }, [qty]);
  return (
    <div className={styles.productCard}>
      <div className={styles.imgContainer}>
        <img className={styles.productImg} src={product.image}></img>
      </div>  
      <div className={styles.productInfo}>
        
        <h3 className={styles.productName} title={product.title}>{product.title}</h3>
        <p>${product.price}</p>
        <div className={styles.qtyControl}>
          <label htmlFor={`qty-${product.id}`}>Quantity:</label>
          <button onClick={increase}> + </button>
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
          <button onClick={decrease}> - </button>
        </div>
        <button value={quantity} onClick={() => onCommit(id, quantity)}>
          {' '}
          {quantity > 0 ? 'Update' : 'Add to'} Cart{' '}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
