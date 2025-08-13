import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

function Shop(){
    return(
        <div className="shop-page">
            <ProductList />
            <Cart />

        </div>
    )
}
export default Shop;