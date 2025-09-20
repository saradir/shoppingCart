import { useMemo } from 'react';
import CartItem from './CartItem';
import styles from '../styles/CartPane.module.css'

function CartPane({ cart, catalogue, updateCartItem }) {
  const entries = Object.entries(cart);
  const catalogueById = useMemo(
    () => Object.fromEntries(catalogue.map((p) => [p.id, p])),
    [catalogue]
  );
  return (
    <div className={styles.cartPane}>
      <h2>Shopping Cart</h2>
      {entries.length === 0 ? (
        'Your cart is empty'
      ) : (
        <div className={styles.itemContainer}>
          {entries.map(([id, qty]) => {
            const product = catalogueById[id];
            if (!product) return null;

            return (
              <CartItem key={id} 
              id={id}
              product={product}
              qty={qty}
              updateCartItem={updateCartItem}
               />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default CartPane;
