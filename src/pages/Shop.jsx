import ProductList from '../components/ProductList';
import CartPane from '../components/CartPane';
import { useEffect, useState } from 'react';
import styles from '../styles/Shop.module.css';

function Shop({ updateCartItem, getCartItemQuantity, cart }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catalogue, setCatalogue] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((data) => setCatalogue(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
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
