import * as pastOrderActionTypes from "./orderActions";

const intialState = {
  currentOrders: [],
  pastOrders: [],
};

const OrderReduer = (state = intialState, action) => {
  switch (action.type) {
    case pastOrderActionTypes.ADD_PAST_OREDER: {
      return {
        ...state,
        pastOrders: [...state.pastOrders, action.payload.order],
      };
    }
    default:
      return state;
  }
};
export default OrderReduer;
