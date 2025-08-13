const ProductCard = ({product}) =>{
    return(
        <div className="product-card">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
            

        </div>
    )
}
export default ProductCard;