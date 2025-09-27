import { useMemo } from 'react';
import CartItem from './CartItem';
import styles from '../styles/CartPane.module.css'
import { useNavigate } from 'react-router-dom';



function CartPane({ cart, catalogue, updateCartItem }) {
  const navigate = useNavigate();
  const entries = Object.entries(cart);
  const catalogueById = useMemo(
    () => Object.fromEntries(catalogue.map((p) => [p.id, p])),
    [catalogue]
  );

  const total = () =>
    Object.entries(cart).reduce((sum, [id, qty]) => {
      const product = catalogueById[id];
      return product ? sum + product.price * qty : sum;
    }, 0);
  return (
    <div className={styles.cartPane}>
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
      </div>
      <div className={styles.body}>
        {entries.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          <div className={styles.itemContainer}>
            {entries.map(([id, qty]) => {
              const product = catalogueById[id];
              if (!product) return null;

              return (
                <CartItem
                  key={id}
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
      <div className={styles.footer}>
        <div className={styles.cartTotal}>
          Total: ${total().toFixed(2)}
        </div>
        <button
         className={styles.checkoutBtn}
         disabled = {entries.length === 0}
         onClick={() => navigate("/checkout")}
        >
          Go To Checkout
        </button>
      </div>
    </div>
  );
}
export default CartPane;
