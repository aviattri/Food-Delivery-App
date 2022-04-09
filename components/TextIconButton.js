import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
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
      {iconPosition == "LEFT" && (
        <Image
          source={icon}
          resizeMode="contain"
          style={{ ...styles.image, ...iconStyle }}
        />
      )}
      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>
      {iconPosition == "RIGHT" && (
        <Images
          source={icon}
          resizeMode="contain"
          style={{ ...styles.image, ...iconStyle }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});

export default TextIconButton;