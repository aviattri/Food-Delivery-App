export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART = "UPDATE_CART";
export const SET_CART_TOTAL = "SET_CART_TOTAL";
export const CLEAR_CART = "CLEAR_CART";

export const setCartItemSuccess = (foodItem) => ({
  type: ADD_CART_ITEM,
  payload: { item: foodItem },
});

export const setUpdateCartSucess = (cart) => ({
  type: UPDATE_CART,
  payload: { cart },
});

export const setCartTotalSuccess = (total) => ({
  type: SET_CART_TOTAL,
  payload: { total },
});

export const setClearCartSucces = () => ({
  type: CLEAR_CART,
  payload: {},
});

export function setCartItem(foodItem) {
  return (dispatch) => dispatch(setCartItemSuccess(foodItem));
}

export function setUpdateCart(cart) {
  return (dispatch) => dispatch(setUpdateCartSucess(cart));
}

export function setCartTotal(total) {
  return (dispatch) => dispatch(setCartTotalSuccess(total));
}

export function setClearCart() {
  return (dispatch) => dispatch(setClearCartSucces());
}
