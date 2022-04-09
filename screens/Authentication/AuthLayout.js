import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ flex: 1, paddingHorizontal: SIZES.padding }}
      >
        {/* app Icon  */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{ width: 200, height: 100 }}
          />
        </View>
        {/* title  and SubTitle*/}
        <View style={{ marginTop: SIZES.padding, ...titleContainerStyle }}>
          <Text style={{ textAlign: "center", ...FONTS.h2 }}>{title}</Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            {subTitle}
          </Text>
        </View>
        {/* children */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
