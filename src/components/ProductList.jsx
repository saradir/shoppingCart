import ProductCard from './ProductCard';

function ProductList({ catalogue, updateCartItem, getCartItemQuantity }) {
  return (
    <>
      {catalogue.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            qty={getCartItemQuantity(product.id)}
            updateCartItem={updateCartItem}
          />
        );
      })}
    </>
  );
}
export default ProductList;
