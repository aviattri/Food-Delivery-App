export const ADD_LIVE_ORDER = "ADD_LIVE_ORDER";
export const ADD_PAST_OREDER = "ADD_LIVE_ORDER";

export const setPastOrderToListSuccess = (order) => ({
  type: ADD_PAST_OREDER,
  payload: { order: order },
});

export function setPastOrder(order) {
  return (dispatch) => dispatch(setPastOrderToListSuccess(order));
}
