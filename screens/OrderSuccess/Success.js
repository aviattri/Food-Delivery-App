import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { TextButton } from "../../components";
import LottieView from "lottie-react-native";

import { connect } from "react-redux";
import { setPastOrder } from "../../store/orders/orderActions";
import { setCartItem, setUpdateCart } from "../../store/cart/cartActions";

const Success = ({ navigation, setPastOrder, setCartItem }) => {
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
          style={{
            height: 150,
            width: 150,
          }}
          autoPlay
          source={require("../../assets/animations/success.json")}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Success);
