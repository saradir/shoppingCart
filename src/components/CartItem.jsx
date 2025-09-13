import { useState } from "react";

function CartItem({key, id, product, qty, updateCartItem}){
            const [localQty, setLocalQty] = useState(qty);
            const increase = () => setLocalQty( (q) => q + 1);
            const decrease = () => setLocalQty( (q) => q - 1);
            

            return (
              <div key={key} className="cart-item">
                    <div className='product-name'>{product.title}</div>
                    <button onClick={increase}> + </button>
                    <input type = 'number'   value={localQty} onChange={(e) => setLocalQty(Number(e.target.value))}></input>
                    <button onClick={decrease}> - </button>
                    <span>Total: {product.price * qty}</span>
                    <button onClick={() => updateCartItem(id, 0)}>Remove</button>

                     {localQty !== qty && (
                        <button onClick={() => updateCartItem(id, localQty)}>Update</button>
                    )}
              </div>
                )

}
export default CartItem;