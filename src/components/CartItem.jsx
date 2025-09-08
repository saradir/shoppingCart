function CartItem({id, product, qty, updateCartItem}){
                return (
              <div key={id} className="cart-item">
                <span className='product-name'>{product.title}</span>
                <span>Qty: {qty}</span>
                <span>Total: {product.price * qty}</span>
                <button onClick={() => updateCartItem(id, 0)}>Remove</button>
              </div>
                )

}
export default CartItem;