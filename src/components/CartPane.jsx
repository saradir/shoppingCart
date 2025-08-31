function CartPane({ cart, catalogue, updateCartItem }) {
  const entries = Object.entries(cart);
  return (
    <div className="cart-pane">
      <h2>Shopping Cart</h2>
      {entries.length === 0 ? (
        'Your cart is empty'
      ) : (
        <ul>
          {entries.map(([id, qty]) => {
            const product = catalogue[id];
            if (!product) return null;

            const lineTotal = qty * product.price;
            return (
              <li key={id} className="cart-item">
                <span>{product.name}</span>
                <span>Qty: {qty}</span>
                <span>Total: {lineTotal}</span>
                <button onClick={() => updateCartItem(id, 0)}>Remove</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default CartPane;
