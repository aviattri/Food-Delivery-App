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
    case pastOrderActionTypes.UPDATE_ORDER: {
      let updatedHistory = [];
      //update order status
      let orderStatus = "DELIVERED";

      //check for order cancellations
      if (action.payload.deliveryDetails.orderCalledByUser) {
        orderStatus = "CANCELED";
      }

      updatedHistory = state.pastOrders.map((item) =>
        item.orderStatus === "ACTIVE"
          ? {
              ...item,
              orderStatus: orderStatus,
              deliveryDetails: action.payload.deliveryDetails,
            }
          : item
      );
      return {
        ...state,
        pastOrders: updatedHistory,
      };
    }
    default:
      return state;
  }
};
export default OrderReduer;
