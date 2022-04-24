import { View, Text } from "react-native";
import React from "react";
import TextIconButton from "./TextIconButton";
import { FONTS, SIZES, COLORS, icons } from "../constants";
import LineDivider from "./LineDivider";

const SettingTextButton = ({ label, onPress, expoIcon, icon, lastItem }) => {
  return (
    <>
      <TextIconButton
        containerStyle={{
          height: 75,
          width: "100%",
          justifyContent: "flex-start",
        }}
        label={label}
        labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
        iconPosition={"LEFT"}
        iconStyle={{ tintColor: COLORS.orange }}
        expoIcon={expoIcon}
        icon={icon}
        onPress={onPress}
      />
      {!lastItem && (
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
      )}
    </>
  );
};

export default SettingTextButton;
