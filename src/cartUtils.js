function applyQuantity(cart, itemId, quantity) {
  if (quantity <= 0) {
    const newCart = { ...cart };
    delete newCart[itemId];
    return newCart;
  } else {
    return {
      ...cart,
      [itemId]: quantity,
    };
  }
}
export { applyQuantity };
