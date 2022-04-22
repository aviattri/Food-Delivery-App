import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const OrderCard = ({
  restarauntImage,
  restarauntName,
  orderTotal,
  orderTime,
  orderItems,
  orderStatus,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {/* Restaurant Image */}
      <Image
        source={restarauntImage}
        resizeMode="contain"
        style={{
          width: 60,
          height: 60,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}
      />
      {/* Order Details */}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingHorizontal: SIZES.radius,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: COLORS.black, ...FONTS.h3 }}>
            {restarauntName}
          </Text>
          <Text
            style={{
              color: COLORS.orange,
              ...FONTS.h3,
            }}
          >
            {orderTotal}
          </Text>
        </View>
        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
          {`${orderTime}` + ` • ` + `${orderItems} items`}
        </Text>
        <Text
          style={{
            color:
              orderStatus == "ACTIVE"
                ? COLORS.primary
                : orderStatus == "DELIVERED"
                ? COLORS.green
                : COLORS.red,
            ...FONTS.body4,
          }}
        >
          {orderStatus == "ACTIVE"
            ? `● Order On The way`
            : orderStatus == "DELIVERED"
            ? `● Order Delivered`
            : `● Order Cancelled`}
        </Text>
      </View>
    </View>
  );
};

export default OrderCard;
