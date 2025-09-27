import React, { useEffect, useState } from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, qty, updateCartItem }) => {
  const id = product.id;
  const [localQty, setlocalQty] = useState(qty || 1);
  const increase = () => setlocalQty( (q) => q + 1);
  const decrease = () => setlocalQty((prev) => Math.max(0, prev - 1)); // can't go below 0
  useEffect(() => {
    setlocalQty(qty || 1);
  }, [qty]);

  const buttonLabel = () => {
  if (qty === 0) return "Add to Cart";
  if (qty !== localQty) return "Update Cart";
  return "In Cart";
};
  return (
    <div className={styles.productCard}>
      <div className={styles.imgContainer}>
        <img className={styles.productImg} src={product.image}></img>
      </div>  
      <div className={styles.productInfo}>
        
        <h3 className={styles.productName} title={product.title}>{product.title}</h3>
        <p className={styles.productPrice}>${product.price}</p>
        <div className={styles.qtyControl}>
          <label htmlFor={`qty-${product.id}`}>Quantity:</label>
          <button onClick={increase}> + </button>
          <input
            id={`qty-${product.id}`}
            type="number"
            value={localQty}
            min="0"
            step="1"
           onChange={(e) =>   
            {const value = Math.max(0, Number(e.target.value));
            setlocalQty(value);}} // this is to make sure user doesn't input negatives
          />
          <button onClick={decrease}> - </button>
        </div>
        <button 
        value={localQty}
        className={`${styles.updateBtn} ${qty !== localQty ? styles.active : ""}`}
        onClick={() => updateCartItem(id, localQty)}
        disabled={localQty === qty}
         >
          {' '}
              {buttonLabel()}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
