import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const CartQuantityButton = ({
  containerStyle,
  iconStyle,
  quantity,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightOrange2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icons.cart}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          height: 15,
          width: 15,
          alignItems: "center",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
            lineHeight: 0,
            fontSize: 10,
          }}
        >
          {quantity ?? 0}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartQuantityButton;
