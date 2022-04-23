import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import LineDivider from "./LineDivider";

const DisplayText = ({ title, description, displayLineDivider = true }) => {
  return (
    <>
      <View
        style={{
          paddingVertical: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{title}</Text>
        <Text style={{ ...FONTS.body3 }}>{description}</Text>
      </View>
      {displayLineDivider && (
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray3,
          }}
        />
      )}
    </>
  );
};

export default DisplayText;
