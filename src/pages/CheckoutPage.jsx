import CheckoutItem from '../components/CheckoutItem';
import { useMemo } from 'react';
import styles from '../styles/CheckoutPage.module.css';

function CheckoutPage ({cart, catalogue, updateCartItem}){
      const catalogueById = useMemo(
        () => Object.fromEntries(catalogue.map((p) => [p.id, p])),
        [catalogue]
      );

    const total = () =>
    Object.entries(cart).reduce((sum, [id, qty]) => {
      const product = catalogueById[id];
      return product ? sum + product.price * qty : sum;
    }, 0);




    
    return(
    <div className={styles.CheckoutPage}>
        <h2 className={styles.checkoutHeader}>Checkout</h2>
        {Object.entries(cart).length === 0 ? (
        <div className={styles.emptyCart}>Your Cart is Empty</div>) : (
        <>
            <div className={styles.checkoutList}>
                {Object.entries(cart).map(([id, qty]) => {
                    const product = catalogueById[id];
                    return product ? (
                        <CheckoutItem
                            key={id}
                            id={id}
                            product={product}
                            qty={qty}
                            updateCartItem={updateCartItem}
                        />
                    ) : null;
                })}
            </div>
            <div className={styles.checkoutFooter}>
                <div className={styles.checkoutSummary}>
                <span>Total:</span>
                <span>${total().toFixed(2)}</span>
                </div>
                <button className={styles.confirmBtn}>Confirm Order</button>
            </div>
        </>
        )}
    </div>
            
    );
}

export default CheckoutPage;