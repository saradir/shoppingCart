import ProductCard from './ProductCard';

function ProductList({ catalogue, updateCartItem, getCartItemQuantity }) {
  return (
    <div>
      {Object.entries(catalogue).map(([id, product]) => {
        console.log(`created product ${id}`);
        return (
          <ProductCard
            key={id}
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
