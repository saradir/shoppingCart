import { useState } from "react";
import styles from '../styles/CartItem.module.css';

function CartItem({key, id, product, qty, updateCartItem}){
            const [localQty, setLocalQty] = useState(qty);
            const increase = () => setLocalQty( (q) => q + 1);
            const decrease = () => setLocalQty( (q) => q - 1);
            

            return (
              <div key={key} className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                  <img src={product.image}></img>
                </div>
                <div className={styles.itemRight}>
                    <div className={styles.productName} title={product.title}>{product.title}</div>
                    <div className={styles.qtyControl}>
                      <button onClick={increase}> + </button>
                      <input type = 'number'   value={localQty} onChange={(e) => setLocalQty(Number(e.target.value))}></input>
                      <button onClick={decrease}> - </button>
                    </div>
                    <span>Total: {product.price * qty}</span>
                    <button onClick={() => updateCartItem(id, 0)}>Remove</button>

                     {localQty !== qty && (
                        <button onClick={() => updateCartItem(id, localQty)}>Update</button>
                    )}
                </div> 
              </div>
                )

}
export default CartItem;