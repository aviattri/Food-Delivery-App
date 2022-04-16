import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, icons, FONTS } from "../constants";
import IconButton from "./IconButton";

const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        width: 130,
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      {/* Minus Button */}
      <IconButton
        containerStyle={{
          flex: 1,
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={icons.minus}
        iconStyle={{
          width: 25,
          height: 25,
          tintColor: value >= 1 ? COLORS.primary : COLORS.gray,
        }}
        onPress={onMinus}
      />
      {/* Input */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ ...FONTS.h2 }}>{value}</Text>
      </View>
      {/* Add Button */}
      <IconButton
        containerStyle={{
          flex: 1,

          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        icon={icons.plus}
        iconStyle={{
          width: 25,
          height: 25,
          tintColor: COLORS.primary,
        }}
        onPress={onAdd}
      />
    </View>
  );
};

export default StepperInput;
