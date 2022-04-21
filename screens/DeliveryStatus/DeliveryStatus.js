import { View, Text, Image } from "react-native";
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
  TextButton,
  TextIconButton,
} from "../../components";

import { connect } from "react-redux";
import { setClearCart } from "../../store/cart/cartActions";
import { setPastOrder, setUpdateOrder } from "../../store/orders/orderActions";

import { ScrollView } from "react-native-gesture-handler";
import curretDate from "../../utils/currentTime";

import { useState } from "react";
import { useEffect } from "react";

const DeliveryStatus = ({ navigation, setUpdateOrder, pastOrders }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState(false);

  function cancelOrder() {
    setUpdateOrder({
      orderCalledByUser: true,
      deliveryTime: curretDate,
    });

    navigation.navigate("Home");
  }

  useEffect(() => {
    //setDeliveryStatus
    let orderStatus =
      pastOrders[pastOrders.length - 1].orderStatus == "DELIVERED" ||
      pastOrders[pastOrders.length - 1].orderStatus == "CANCELED";
    setDeliveryStatus(orderStatus);

    let dilveryTime = setTimeout(() => {
      if (currentStep <= 4) {
        setCurrentStep(currentStep + 1);
      }
    }, 10000);

    //if order is delivered
    if (currentStep == 3) {
      // change delivery status
      setUpdateOrder({ deliveryTime: curretDate });
    }
    return () => {
      console.log(pastOrders);
      clearTimeout(dilveryTime);
    };
  }, [currentStep, deliveryStatus]);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="DELIVERY STATUS"
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
  function renderInfo() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: SIZES.padding * 2,
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
          Estimated Delivery Time
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            color: COLORS.black,
            ...FONTS.h2,
          }}
        >
          18th Apr 2022 / 2:20 PM
        </Text>
      </View>
    );
  }
  function renderTrackOrder() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          alignItems: "center",
          paddingVertical: SIZES.padding,
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Track Order */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.padding,
            marginBottom: 20,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Track Order</Text>
          <Text
            style={{
              marginLeft: SIZES.padding * 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            NYBOVC12
          </Text>
        </View>
        <LineDivider lineStyle={{ backgrounColor: COLORS.black }} />
        {/* Steps */}
        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`OrderStatus-${index}`}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: -5,
                  }}
                >
                  <Image
                    source={icons.check_circle}
                    style={{
                      height: 40,
                      width: 40,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />
                  <View
                    style={{
                      paddingLeft: SIZES.padding,
                    }}
                  >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>
                      {item.sub_title}
                    </Text>
                  </View>
                </View>
                {index < constants.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep && (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      />
                    )}
                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{
                          height: 50,
                          width: 4,
                          marginLeft: 17,
                        }}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginBottom: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* if order is confirmed but not prepared */}
        {currentStep == 0 && (
          <TextButton
            buttonContainerStyle={{
              height: 55,
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            label="CANCEL ORDER"
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
            onPress={() => cancelOrder()}
          />
        )}
        {/* delivering... if order is confirmed and prepared */}
        {currentStep != 0 && currentStep <= 3 && (
          <View
            style={{
              flexDirection: "row",
              height: 55,
            }}
          >
            {/* cancel Button */}
            <TextButton
              label={`Cancel`}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}
              buttonContainerStyle={{
                width: "40%",
                paddingHorizontal: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
              }}
              onPress={() => {
                navigation.navigate("Home");
              }}
              disabled={false}
            />
            {/* Map View Button */}
            <TextIconButton
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              label={"Map View"}
              labelStyle={{
                paddingLeft: SIZES.radius,
                paddingRight: SIZES.padding,
              }}
              icon={icons.map}
              iconPosition={"LEFT"}
              iconStyle={{
                marginLeft: SIZES.padding,
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
              onPress={() => {
                //dispatch

                navigation.navigate("Map");
              }}
            />
          </View>
        )}
        {/*delivered...  */}
        {currentStep != 0 && currentStep > 4 && (
          <TextButton
            buttonContainerStyle={{
              height: 55,
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            label="DONE"
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
            onPress={() => {
              //dispatch
              setClearCart();
              navigation.navigate("Home");
            }}
          />
        )}
      </View>
    );
  }

  if (deliveryStatus) {
    //cart is empty
    return (
      <>
        {/* Header */}
        {renderHeader()}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.black, ...FONTS.body2 }}>
            Nothing to Track
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            Order exciting food now!
          </Text>
        </View>
        <LottieView
          resizeMode="contain"
          style={{ flex: 1, justifyContent: "flex-start", height: 100 }}
          loop
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
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Info */}
      {renderInfo()}
      {/* Track Order */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    pastOrders: state.orderReducer.pastOrders,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setUpdateOrder: (deliveryDetails) => {
      return dispatch(setUpdateOrder(deliveryDetails));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryStatus);
