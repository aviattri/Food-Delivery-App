export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART = "UPDATE_CART";

export const setCartItemSuccess = (foodItem) => ({
  type: ADD_CART_ITEM,
  payload: { item: foodItem },
});

export const setUpdateCartSucess = (cart) => ({
  type: UPDATE_CART,
  payload: { cart },
});

export function setCartItem(foodItem) {
  return (dispatch) => dispatch(setCartItemSuccess(foodItem));
}

export function setUpdateCart(cart) {
  return (dispatch) => dispatch(setUpdateCartSucess(cart));
}
