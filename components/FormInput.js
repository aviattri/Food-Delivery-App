import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { TextInput } from "react-native-gesture-handler";

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  value,
  placeHolder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntery,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCaptalize = "none",
  errorMsg = "",
  maxLength,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* title / error message */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
        <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
      </View>
      {/* text input */}
      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{ flex: 1, ...inputStyle }}
          placeholder={placeHolder}
          value={value}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntery}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCaptalize}
          onChangeText={(text) => onChange(text)}
          maxLength={maxLength}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
