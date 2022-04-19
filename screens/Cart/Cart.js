import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import LottieView from "lottie-react-native";

import {
  CartQuantityButton,
  Header,
  IconButton,
  StepperInput,
} from "../../components";

import { connect } from "react-redux";
import { setCartItem } from "../../store/cart/cartActions";

import { SwipeListView } from "react-native-swipe-list-view";
import FooterTotal from "../../components/FooterTotal";

import { useEffect } from "react";

const Cart = ({ navigation, myCart }) => {
  const [myCartList, setMyCartList] = useState(myCart);
  const updateQuanityHandler = (newQty, id) => {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );
    setMyCartList(newMyCartList);
  };

  const removeFoodItem = (id) => {
    let newcartList = [...myCartList];
    let index = newcartList.findIndex((cart) => cart.id === id);
    newcartList.splice(index, 1);
    setMyCartList(newcartList);
  };

  useEffect(() => {
    setMyCartList(myCart);
  }, [myCart]);

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              justifyContent: "space-between",
              backgroundColor: COLORS.lightGray2,
              ...styles.cartItem,
            }}
          >
            {/* Food Image */}
            <Image
              source={data.item.image}
              resizeMode="contain"
              style={styles.foodImage}
            />
            {/* Food Details */}
            <View style={styles.foodDetails}>
              <Text style={styles.foodName}>{data.item.name}</Text>
              <Text style={styles.foodPrice}>{`$${data.item.price}`}</Text>
            </View>
            {/* Stepper Input */}
            <StepperInput
              containerStyle={styles.stepperInput}
              value={data.item.qty}
              onAdd={() =>
                updateQuanityHandler(data.item.qty + 1, data.item.id)
              }
              onMinus={() =>
                data.item.qty > 1
                  ? updateQuanityHandler(data.item.qty - 1, data.item.id)
                  : ""
              }
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              marginTop: SIZES.radius,
              height: 100,
              width: "100%",
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
              // ...styles.cartItem,
            }}
            icon={icons.delete_icon}
            iconStyle={{
              marginRight: 10,
              position: "absolute",
              right: SIZES.radius,
              top: SIZES.h1,
            }}
            onPress={() => removeFoodItem(data.item.id)}
          />
        )}
        ListFooterComponent={<View style={{ height: 200 }}></View>}
      />
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          height: "60%",
          width: "100%",
        }}
      >
        <FooterTotal
          subTotal={41}
          shippingFess={0}
          total={41}
          onPress={() => navigation.navigate("MyCard")}
        />
      </View>
    );
  }

  if (myCart.length == 0) {
    //cart is empty
    return (
      <>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.black, ...FONTS.body2 }}>
            Your Cart is Empty
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            Order exciting food now!
          </Text>
        </View>
        <LottieView
          resizeMode="contain"
          style={{ flex: 1, justifyContent: "flex-start", height: 100 }}
          autoPlay
          source={require("../../assets/animations/order_food.json")}
        />
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Cart List */}
      {renderCartList()}
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  foodImage: {
    marginTop: SIZES.radius,
    width: 80,
    height: 80,
  },
  foodDetails: {
    flexDirection: "column",
  },
  foodName: {
    ...FONTS.body4,
  },
  foodPrice: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  stepperInput: {
    backgroundColor: COLORS.white,
  },
});

function mapStateToProps(state) {
  return {
    myCart: state.cartReducer.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setCartItem: (foodItem) => {
      return dispatch(setCartItem(foodItem));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
