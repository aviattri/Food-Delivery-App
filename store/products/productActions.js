export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export const setProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS,
  payload: { products },
});

export function setProducts(products) {
  return (dispatch) => dispatch(setProductsSuccess(products));
}
