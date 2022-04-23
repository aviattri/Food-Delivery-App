import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, dummyData, FONTS, icons, images, SIZES } from "../constants";

const CouponLayout = ({ coupon }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 360,
          height: 130,
          backgroundColor: COLORS.lightGray2,
          borderRadius: 8,
        }}
      >
        {/* Coupon Logo */}
        <View
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            borderRadius: 25,
            left: -25,
            top: 45,
            backgroundColor: "white",
          }}
        >
          <Image
            source={coupon?.logo}
            resizeMode="contain"
            style={{
              position: "absolute",
              top: -25,
              left: 70,
              width: 90,
              height: 90,
              borderRadius: SIZES.padding * 10,
            }}
          />
        </View>
        {/* line divider */}
        <View
          style={{
            position: "absolute",
            left: 150,
            height: 30,
            height: "100%",
            width: 2,
            backgroundColor: COLORS.white,
          }}
        />
        {/* Copon Details */}
        <View
          style={{
            position: "absolute",
            width: "45%",
            top: 20,
            right: 30,
            flexDirection: "column",
          }}
        >
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {coupon?.name}
          </Text>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.h2,
            }}
          >
            {coupon?.discountRate}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
          >
            {coupon.redeemStatus
              ? `Used on ${coupon?.redeemedAt}`
              : coupon?.validity}
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            right: -25,
            width: 50,
            height: 30,
            borderRadius: 25,
            top: 10,
            backgroundColor: "white",
          }}
        />
        <View
          style={{
            position: "absolute",
            right: -25,
            width: 50,
            height: 30,
            borderRadius: 25,
            top: 50,
            backgroundColor: "white",
          }}
        />
        <View
          style={{
            position: "absolute",
            right: -25,
            width: 50,
            height: 30,
            borderRadius: 25,
            top: 90,
            backgroundColor: "white",
          }}
        />
      </View>
    </View>
  );
};

export default CouponLayout;
