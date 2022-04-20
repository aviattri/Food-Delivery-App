import * as cartActionTypes from "./cartActions";

const intialState = {
  cart: [],
  cartTotal: [],
};

const CartReducer = (state = intialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_CART_ITEM: {
      const foodItem = state.cart?.find(
        (item) => item.name === action.payload.item.name
      );
      let updatedCart = [];
      //if item exits, then change the qty and price of that item in state
      if (foodItem) {
        updatedCart = state.cart.map((item) =>
          item.name === action.payload.item.name
            ? {
                ...item,
                qty: action.payload.item.qty,
                price: action.payload.item.price,
              }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.item],
        };
      }
    }
    case cartActionTypes.UPDATE_CART: {
      return {
        ...state,
        cart: action.payload.cart,
      };
    }
    case cartActionTypes.SET_CART_TOTAL: {
      return {
        ...state,
        cartTotal: action.payload.total,
      };
    }
    case cartActionTypes.CLEAR_CART: {
      return {
        ...state,
        cartTotal: [],
        cart: [],
      };
    }
    default:
      return state;
  }
};
export default CartReducer;
