import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { Entypo } from "@expo/vector-icons";

const VerticalFormInput = ({
  label,
  onChange,
  containerStyle,
  placeholder,
  icon,
  onPress,
}) => {
  return (
    <View style={{ flexDirection: "column", ...containerStyle }}>
      <Text
        style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}
      >
        {label}
      </Text>
      <TouchableOpacity style={styles.rightIconStyle} onPress={() => onPress}>
        {icon && <Entypo name={icon} size={24} />}
      </TouchableOpacity>
      <TextInput
        style={{
          width: "100%",
          backgroundColor: COLORS.white,
          height: 50,
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
        }}
        placeholder={placeholder}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rightIconStyle: {
    zIndex: 1,
    position: "absolute",
    right: SIZES.radius,
    top: SIZES.radius * 5,
    color: COLORS.gray,
  },
});

export default VerticalFormInput;
