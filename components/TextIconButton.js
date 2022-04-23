import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
  expoIcon,
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
      {iconPosition == "LEFT" && !expoIcon && (
        <Image
          source={icon}
          resizeMode="contain"
          style={{ ...styles.image, ...iconStyle }}
        />
      )}
      {iconPosition == "LEFT" && expoIcon && (
        <AntDesign name={icon} size={25} color={COLORS.orange} />
      )}
      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>
      {iconPosition == "RIGHT" && !expoIcon && (
        <Image
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
