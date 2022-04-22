export const UPDATE_ORDER = "UPDATE_ORDER";
export const ADD_PAST_OREDER = "ADD_LIVE_ORDER";
export const DELIVERY_STAGE = "DELIVERY_STAGE";

export const setPastOrderToListSuccess = (order) => ({
  type: ADD_PAST_OREDER,
  payload: { order: order },
});

export const setUpdateOrderSucces = (deliveryDetails) => ({
  type: UPDATE_ORDER,
  payload: { deliveryDetails: deliveryDetails },
});

export const setDeliveryStageSuccess = (stage) => ({
  type: DELIVERY_STAGE,
  payload: { stage: stage },
});

export function setPastOrder(order) {
  return (dispatch) => dispatch(setPastOrderToListSuccess(order));
}

export function setUpdateOrder(deliveryDetails) {
  return (dispatch) => dispatch(setUpdateOrderSucces(deliveryDetails));
}

export function setDeliveryStage(stage) {
  return (dispatch) => dispatch(setDeliveryStageSuccess(stage));
}
