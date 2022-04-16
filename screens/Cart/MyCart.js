import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
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

const MyCart = ({ navigation, myCart }) => {
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
      />
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 300,
          marginBottom: SIZES.radius,
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
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
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
  console.log(state);
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

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
