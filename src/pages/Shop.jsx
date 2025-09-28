import ProductList from '../components/ProductList';
import CartPane from '../components/CartPane';
import styles from '../styles/Shop.module.css';

function Shop({ updateCartItem, getCartItemQuantity, cart, catalogue }) {

  return (
    <div className={styles.mainContainer}>
      <h1>Shop</h1>
      <div className={styles.shop}>
          <div className={styles.catalogue}>
            <ProductList
              catalogue={catalogue}
              updateCartItem={updateCartItem}
              getCartItemQuantity={getCartItemQuantity}
            />
            </div>
            <div className={styles.cartPane}>
              <CartPane
                catalogue={catalogue}
                cart={cart}
                updateCartItem={updateCartItem}
              />
            </div>
      
     </div>
    </div>
  );
}

export default Shop;
