import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { TextButton } from "../../components";
import LottieView from "lottie-react-native";

import { connect } from "react-redux";
import { setPastOrder } from "../../store/orders/orderActions";
import {
  setCartItem,
  setUpdateCart,
  setClearCart,
} from "../../store/cart/cartActions";
import { useEffect, useState } from "react";
import curretDate from "../../utils/currentTime";

const Success = ({
  navigation,
  cartTotal,
  myCart,
  pastOrders,
  setPastOrder,
  setClearCart,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let dispatchingOrder = setTimeout(() => {
      setIsLoading(false);

      //record the order time
      let deliveryTime = curretDate;

      // add to past orders
      setPastOrder({
        orderTotal: cartTotal,
        orderDetails: myCart,
        orderStatus: "ACTIVE",
        orderPlacedTime: deliveryTime,
      });

      //dispatch clear cart
      setClearCart();
    }, 2000);

    return () => {
      clearTimeout(dispatchingOrder);
    };
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading && <ActivityIndicator size="large" color={COLORS.black} />}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.padding,
        }}
      >
        <LottieView
          resizeMode="contain"
          style={{ justifyContent: "flex-start", height: 200 }}
          loop
          autoPlay
          source={require("../../assets/animations/success_2.json")}
        />
        <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
          Order placed
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.base,
            ...FONTS.body3,
            color: COLORS.gray,
          }}
        >
          Payment was successfully made.
        </Text>
      </View>
      <TextButton
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          padding: SIZES.radius,
        }}
        label={"Done"}
        onPress={() => navigation.navigate("DeliveryStatus")}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    pastOrders: state.orderReducer.pastOrders,
    myCart: state.cartReducer.cart,
    cartTotal: state.cartReducer.cartTotal,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setPastOrder: (order) => {
      return dispatch(setPastOrder(order));
    },
    setCartItem: (foodItem) => {
      return dispatch(setCartItem(foodItem));
    },
    setUpdateCart: (cart) => {
      return dispatch(setUpdateCart(cart));
    },
    setClearCart: () => {
      return dispatch(setClearCart());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Success);
