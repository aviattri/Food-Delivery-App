import { View, Text, Image, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import LottieView from "lottie-react-native";

import {
  CartQuantityButton,
  Header,
  IconButton,
  StepperInput,
} from "../../components";

import { connect } from "react-redux";
import {
  setCartItem,
  setUpdateCart,
  setCartTotal,
} from "../../store/cart/cartActions";

import { SwipeListView } from "react-native-swipe-list-view";
import FooterTotal from "../../components/FooterTotal";

const Cart = ({
  navigation,
  myCart,
  products,
  setCartItem,
  setUpdateCart,
  setCartTotal,
}) => {
  const [myCartList, setMyCartList] = useState(myCart);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingFess, setShippingFess] = useState(3.4);

  const updateQuanityHandler = (newQty, id, newPrice) => {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? setCartItem({ ...cl, qty: newQty, price: newPrice }) : cl
    );
  };
  const calculateSubtotal = (cart) => {
    let price = 0;
    let totalPrice = 0;
    //cal subtotal
    cart.map((item, index) => (price = price + item.price));
    setSubTotal(price);
    //cal total
    totalPrice = price + shippingFess;
    setTotal(totalPrice);
  };

  useEffect(() => {
    setMyCartList(myCart);
    calculateSubtotal(myCart);
  }, [myCart]);

  const removeFoodItem = (id) => {
    let newcartList = [...myCartList];
    let index = newcartList.findIndex((cart) => cart.id === id);
    newcartList.splice(index, 1);
    setUpdateCart(newcartList);
  };

  useEffect(() => {
    setMyCartList(myCart);
  }, [myCart]);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="MY CART"
        leftComponent={
          <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CartQuantityButton quantity={myCart.length ?? 0} />}
      />
    );
  }
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
              onAdd={() => {
                let selectedItem = products.find(
                  (item) => item.id == data.item.id
                );
                updateQuanityHandler(
                  data.item.qty + 1,
                  data.item.id,
                  data.item.price + selectedItem.price
                );
              }}
              onMinus={() => {
                let selectedItem = products.find(
                  (item) => item.id == data.item.id
                );

                data.item.qty > 1
                  ? updateQuanityHandler(
                      data.item.qty - 1,
                      data.item.id,
                      data.item.price - selectedItem.price
                    )
                  : "";
              }}
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
          subTotal={subTotal ?? 0}
          shippingFess={shippingFess}
          total={total ?? 0}
          onPress={() => {
            //dispatch
            setCartTotal({
              orderPrice: {
                subTotal: subTotal,
                total: total,
                shippingFess: shippingFess,
              },
            });
            navigation.navigate("MyCard");
          }}
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
          loop={false}
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
    products: state.productReducer.products,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setCartItem: (foodItem) => {
      return dispatch(setCartItem(foodItem));
    },
    setUpdateCart: (cart) => {
      return dispatch(setUpdateCart(cart));
    },
    setCartTotal: (total) => {
      return dispatch(setCartTotal(total));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
