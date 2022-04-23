import * as couponActionTypes from "./couponActions";

const intialState = {
  coupons: [],
};

const CouponReducer = (state = intialState, action) => {
  switch (action.type) {
    case couponActionTypes.LOAD_COUPONS: {
      return {
        coupons: action.payload.coupons,
      };
    }
    case couponActionTypes.UPDATE_COUPON: {
      //find coupon
      const coupon = state.coupons?.find(
        (item) => item.name === action.payload.coupon.name
      );

      let updatedCoupons = [];

      //update coupon
      if (coupon) {
        updatedCoupons = state.coupons.map((item) =>
          item.name === action.payload.coupon.name
            ? {
                ...item,
                redeemStatus: action.payload.coupon.redeemStatus,
                redeemedAt: action.payload.coupon.redeemedAt,
              }
            : item
        );
        return {
          ...state,
          coupons: updatedCoupons,
        };
      }
    }
    default:
      return state;
  }
};
export default CouponReducer;
