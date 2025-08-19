import ProductCard from './ProductCard';

function ProductList({ products, updateCartItem, getCartItemQuantity }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          qty={getCartItemQuantity(product.id)}
          onCommit={updateCartItem}
        />
      ))}
    </div>
  );
}
export default ProductList;
