import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Platform } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import LineDivider from "./LineDivider";
import TextButton from "./TextButton";

const FooterTotal = ({ subTotal, shippingFess, total, onPress, disable }) => {
  return (
    <View>
      {/* Shadow */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      {/* Details */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        {/* subTotal */}
        <View
          style={{
            marginTop: SIZES.radius,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.body3 }}>SubTotal</Text>
          <Text style={{ ...FONTS.h3 }}>{`$${subTotal.toFixed(2)}`}</Text>
        </View>
        {/* Shipping Fee */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...FONTS.body3 }}>Delivery fees</Text>
          <Text style={{ ...FONTS.h3 }}>{`$${shippingFess.toFixed(2)}`}</Text>
        </View>
        {/* LineDivider */}
        <LineDivider
          lineStyle={{ marginTop: SIZES.padding, marginBottom: SIZES.padding }}
        />
        {/* Total */}
        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.h2 }}>Total:</Text>
          <Text style={{ ...FONTS.h2 }}>{`$${total.toFixed(2)}`}</Text>
        </View>
        {/* PayButton */}
        <TextButton
          disabled={disable}
          buttonContainerStyle={{
            marginTop: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: disable ? COLORS.gray : COLORS.primary,
            height: 60,
          }}
          label={"Place your order"}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
