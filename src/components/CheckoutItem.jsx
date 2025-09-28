import { useState, useLayoutEffect } from "react";
import styles from '../styles/CheckoutItem.module.css';

function CheckoutItem({ id, product, qty, updateCartItem}){
            const [localQty, setLocalQty] = useState(qty);
            const increase = () => setLocalQty( (q) => q + 1);
            const decrease = () => setLocalQty((prev) => Math.max(1, prev - 1)); // can't go below 1
            
  // sync immediately before paint
  useLayoutEffect(() => {
    setLocalQty(qty);
  }, [qty]);

  
  return (
  <div className={styles.checkoutItem}>
    <button 
      className={styles.removeBtn} 
      onClick={() => updateCartItem(id, 0)}
    >
      ×
    </button>

    <div className={styles.checkoutItemImage}>
      <img src={product.image} alt={product.title} />
    </div>

    <div className={styles.itemRight}>
      <div className={styles.productName} title={product.title}>
        {product.title}
      </div>

      <div className={styles.qtyControl}>
        <button onClick={increase}> + </button>
        <input 
          min="0"
          type="number" 
          value={localQty} 
          onChange={(e) =>   
            {const value = Math.max(1, Number(e.target.value));
            setLocalQty(value);}} // this is to make sure user doesn't input negatives
        />
        <button onClick={decrease}> - </button>
      </div>

      <span className={styles.cartItemTotal}>Total: ${(product.price * localQty).toFixed(2)}</span>

      <button 
        onClick={() => updateCartItem(id, localQty)}   
        className={`${styles.updateBtn} ${qty !== localQty ? styles.active : ""}`}
      >
        Update
      </button>
    </div> 
  </div>
);
}
export default CheckoutItem;