import { combineReducers } from "redux";
import tabReducer from "./tab/tabReducer";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import favouriteReducer from "./favourites/favouriteReducer";
import orderReducer from "./orders/orderReducer";
import couponReducer from "./coupons/couponReducer";

export default combineReducers({
  tabReducer,
  cartReducer,
  productReducer,
  favouriteReducer,
  orderReducer,
  couponReducer,
});
