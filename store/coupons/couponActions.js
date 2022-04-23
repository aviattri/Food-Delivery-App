export const LOAD_COUPONS = "LOAD_COUPONS";
export const UPDATE_COUPON = "UPDATE_COUPON";

export const setLoadCouponsSuccess = (coupons) => ({
  type: LOAD_COUPONS,
  payload: { coupons: coupons },
});

export const setUpdateCouponSuccess = (coupon) => ({
  type: UPDATE_COUPON,
  payload: { coupon: coupon },
});

export function setLoadCoupons(coupons) {
  return (dispatch) => dispatch(setLoadCouponsSuccess(coupons));
}

export function setUpdateCoupon(coupon) {
  return (dispatch) => dispatch(setUpdateCouponSuccess(coupon));
}
