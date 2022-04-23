import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import IconButton from "./IconButton";

const NotificationItems = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: SIZES.width / 3,
        width: SIZES.width * 0.85,
        padding: SIZES.radius,
        marginTop: SIZES.radius,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
        backgroundColor: COLORS.lightGray2,
      }}
      onPress={onPress}
    >
      {/* Card Image */}
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          paddingHorizontal: 10,
          marginLeft: SIZES.radius,
          height: SIZES.width / 6,
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ flex: 1, alignSelf: "center", width: 50, height: 50 }}
          source={item.logo}
        />
      </View>
      {/* notification details */}
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            marginLeft: SIZES.radius,
            width: SIZES.width / 2,
            ...FONTS.h4,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            marginLeft: SIZES.radius,
            color: COLORS.gray,
            width: SIZES.width / 2,
            ...FONTS.body4,
          }}
          numberOfLines={2}
        >
          {item.description}
        </Text>
        <Text
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body5,
          }}
        >
          {item.time}
        </Text>
      </View>
      {/* Notification Icon */}
      <View>
        <IconButton
          expoIcon={true}
          icon={"dots-three-vertical"}
          iconStyle={{
            position: "absolute",
            right: -30,
            tintColor: COLORS.black,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItems;
