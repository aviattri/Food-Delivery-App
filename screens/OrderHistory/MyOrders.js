import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from "../../constants";
import {
  Header,
  IconButton,
  LineDivider,
  OrderCard,
  TextButton,
  TextIconButton,
} from "../../components";

import { connect } from "react-redux";
import { setPastOrder } from "../../store/orders/orderActions";

import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { useEffect } from "react";

const MyOrders = ({ navigation, orderHistory }) => {
  const [pastOrders, setPastOrders] = useState(orderHistory);
  const [selectedButton, setSelectedButton] = useState(0);
  const [orderCardSelectedButton, setOrderCardSelectedButton] = useState(0);

  useEffect(() => {
    setPastOrders(orderHistory);
  }, [pastOrders]);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="MY ORDERS"
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
            onPress={() => navigation.navigate("Home")}
          />
        }
      />
    );
  }
  function renderTopButtons() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* My Orders */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            height: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
            marginHorizontal: SIZES.radius,
            backgroundColor:
              selectedButton == 0 ? COLORS.primary : COLORS.lightGray2,
          }}
          label={"History"}
          labelStyle={{
            paddingHorizontal: SIZES.padding,
            color: selectedButton == 0 ? COLORS.white : COLORS.primary,
          }}
          onPress={() => {
            setSelectedButton(0);
          }}
        />
        {/* Upcoming */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            height: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
            marginHorizontal: SIZES.radius,
            backgroundColor:
              selectedButton == 1 ? COLORS.primary : COLORS.lightGray2,
          }}
          label={"Upcoming"}
          labelStyle={{
            paddingHorizontal: SIZES.padding,
            color: selectedButton == 1 ? COLORS.white : COLORS.primary,
          }}
          onPress={() => {
            setSelectedButton(1);
          }}
        />
      </View>
    );
  }
  function renderOrderCardFooter() {
    return (
      <View style={{ flex: 1, flexDirection: "row", paddingTop: SIZES.radius }}>
        {/* Re Oreder */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            height: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
            marginHorizontal: SIZES.radius,
            backgroundColor:
              orderCardSelectedButton == 0 ? COLORS.primary : COLORS.lightGray2,
          }}
          label={"Re-Order"}
          labelStyle={{
            paddingHorizontal: SIZES.padding,
            color: orderCardSelectedButton == 0 ? COLORS.white : COLORS.primary,
          }}
          onPress={() => {
            setOrderCardSelectedButton(0);
          }}
        />
        {/* Rate Order */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            height: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
            marginHorizontal: SIZES.radius,
            backgroundColor:
              orderCardSelectedButton == 1
                ? COLORS.primary
                : COLORS.lightOrange3,
          }}
          label={"Rate"}
          labelStyle={{
            paddingHorizontal: SIZES.padding,
            color: orderCardSelectedButton == 1 ? COLORS.white : COLORS.orange,
          }}
          onPress={() => {
            setOrderCardSelectedButton(1);
          }}
        />
      </View>
    );
  }
  function renderOrderHistory() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          height: "100%",
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
          }}
        >
          21 April 2022
        </Text>
        <FlatList
          data={pastOrders}
          keyExtractor={(item, index) => `order-${index}`}
          vertical
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: 200, marginBottom: SIZES.radius }}></View>
          }
          renderItem={({ item, index }) => (
            <>
              <View
                style={{
                  backgroundColor: COLORS.lightGray2,
                  marginTop: SIZES.radius,
                  paddingHorizontal: SIZES.radius,
                  paddingVertical: SIZES.radius,
                  borderRadius: SIZES.radius,
                }}
              >
                {/* OrderDetails */}
                <OrderCard
                  restarauntImage={icons.calories}
                  restarauntName={
                    item?.orderDetails[0]?.restaurantDetails?.name
                  }
                  orderTotal={`$${item?.orderTotal?.orderPrice?.total}`}
                  orderTime={item.orderDeliveryTime}
                  orderItems={item?.orderDetails.length}
                  orderStatus={item.orderStatus}
                />
                {/* Reorder and Rate buttons */}
                {renderOrderCardFooter()}
              </View>
            </>
          )}
        />
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
      {/* Header */}
      {renderHeader()}
      {/* Top Buttons */}
      {renderTopButtons()}
      {/* Order History */}
      {renderOrderHistory()}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    // myCart: state.cartReducer.cart,
    orderHistory: state.orderReducer.pastOrders,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // setClearCart: () => {
    //   return dispatch(setClearCart());
    // },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
