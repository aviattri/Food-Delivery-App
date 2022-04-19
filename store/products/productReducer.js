import * as ProductActionTypes from "./productActions";

const intialState = {
  products: [],
};

const ProductReducer = (state = intialState, action) => {
  switch (action.type) {
    case ProductActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
export default ProductReducer;
