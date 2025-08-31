import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import './App.css';
import { applyQuantity } from './cartUtils.js';

import { useMemo, useEffect, useState } from 'react';

function App() {
  // cart = { productId: quantity }
  const [cart, setCart] = useState({});

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
    // This effect could be used to sync cart with localStorage or an API
    console.log('Cart updated:', cart);
  }, [cart]);

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
            />
          }
        />
      </Routes>
    </div>
  );
}


export default App;
