import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import './styles/App.css'
import { applyQuantity } from './cartUtils.js';

import { useMemo, useEffect, useState } from 'react';
import CheckoutPage from './pages/CheckoutPage.jsx';



function App() {
  // cart = { productId: quantity }
  const [cart, setCart] = useState({});
  // catalogue = [{id, title...}, {id, title...}]
  const [catalogue, setCatalogue] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  function updateCartItem(productId, quantity) {
    setCart((prevCart) => {
      return applyQuantity(prevCart, productId, quantity);
    });
  }

  function getCartItemQuantity(productId) {
    return cart[productId] || 0;
  }

  const cartQuantity = useMemo(() => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  }, [cart]);

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

  // Pass cart and update functions to Navbar
  return (
    <div className="App">
      <Navbar cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shop"
          element={
            <Shop
              updateCartItem={updateCartItem}
              getCartItemQuantity={getCartItemQuantity}
              cart={cart}
              catalogue={catalogue}
            />
          }
        />
        <Route path="/checkout" element={
          <CheckoutPage
            cart={cart}
            catalogue={catalogue}
            updateCartItem={updateCartItem}
            />
          }
          />
      </Routes>
    </div>
  );
}


export default App;
