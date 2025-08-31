import ProductList from '../components/ProductList';
import CartPane from '../components/CartPane';
function Shop({ updateCartItem, getCartItemQuantity, cart }) {
  // Example catalogue, replace with actual data or fetch from an API
  const catalogue = {
    1: { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    2: { id: 2, name: 'Product 2', price: 20 },
    3: { id: 3, name: 'Product 3', price: 30 },
  };

  return (
    <div className="shop">
      <h1>Shop</h1>
      <ProductList
        catalogue={catalogue}
        updateCartItem={updateCartItem}
        getCartItemQuantity={getCartItemQuantity}
      />
      <div className="cart-pane">
        <CartPane
          catalogue={catalogue}
          cart={cart}
          updateCartItem={updateCartItem}
        />
      </div>
    </div>
  );
}

export default Shop;
