import { useState, useLayoutEffect } from "react";
import styles from '../styles/CartItem.module.css';
import { isVisible } from "@testing-library/user-event/dist/cjs/utils/index.js";

function CartItem({key, id, product, qty, updateCartItem}){
            const [localQty, setLocalQty] = useState(qty);
            const increase = () => setLocalQty( (q) => q + 1);
            const decrease = () => setLocalQty( (q) => q - 1);
            
  // sync immediately before paint
  useLayoutEffect(() => {
    setLocalQty(qty);
  }, [qty]);

           return (
  <div className={styles.cartItem}>
    <button 
      className={styles.removeBtn} 
      onClick={() => updateCartItem(id, 0)}
    >
      ×
    </button>

    <div className={styles.cartItemImage}>
      <img src={product.image} alt={product.title} />
    </div>

    <div className={styles.itemRight}>
      <div className={styles.productName} title={product.title}>
        {product.title}
      </div>

      <div className={styles.qtyControl}>
        <button onClick={increase}> + </button>
        <input 
          type="number" 
          value={localQty} 
          onChange={(e) => setLocalQty(Number(e.target.value))} 
        />
        <button onClick={decrease}> - </button>
      </div>

      <span>Total: ${(product.price * qty).toFixed(2)}</span>

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
export default CartItem;