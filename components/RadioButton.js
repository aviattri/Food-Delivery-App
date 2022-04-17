import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const RadioButton = ({
  containerStyle,
  label,
  labelStyle,
  iconStyle,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{ marginLeft: 5, width: 20, height: 20, ...iconStyle }}
      />
      <Text
        style={{
          color: COLORS.gray,
          marginLeft: SIZES.radius,
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
