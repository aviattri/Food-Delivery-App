export const ADD_CART_ITEM = "ADD_CART_ITEM";

export const setCartItemSuccess = (foodItem) => ({
  type: ADD_CART_ITEM,
  payload: { item: foodItem },
});

export function setCartItem(foodItem) {
  return (dispatch) => dispatch(setCartItemSuccess(foodItem));
}
