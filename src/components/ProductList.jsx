import ProductCard from './ProductCard';

function ProductList({ catalogue, updateCartItem, getCartItemQuantity }) {
  return (
    <div>
      {catalogue.map((product) => {
        console.log(`created product ${product.id}`);
        return (
          <ProductCard
            key={product.id}
            product={product}
            qty={getCartItemQuantity(product.id)}
            onCommit={updateCartItem}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
