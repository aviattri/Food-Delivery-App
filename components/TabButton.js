import { View, Text, Image } from "react-native";
import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../constants";
import Animated from "react-native-reanimated";

const TabButton = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {/* icon */}
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            width: "70%",
            height: 50,
            alignItems: "center",
            marginRight: 40,
            borderRadius: 25,
          }}
        >
          {/* icon */}
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
          {/* label */}
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.gray,
                ...FONTS.h3,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TabButton;
