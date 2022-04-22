import { View, Text, Image, ImageStore } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HorizontalFoodCard = ({ containerStyle, item, imageStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image source={item.image} style={imageStyle} />
      {/* Info */}
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Name  */}
        <Text numberOfLines={1} style={{ ...FONTS.h3, fontSize: 17 }}>
          {item.name}
        </Text>
        {/* Descritiom */}
        <Text
          numberOfLines={1}
          style={{ flexShrink: 1, color: COLORS.darkGray2, ...FONTS.body4 }}
        >
          {item.description}
        </Text>
        {/* Price */}
        <Text
          style={{ ...FONTS.body2, marginTop: SIZES.base }}
        >{`$ ${item.price}`}</Text>
      </View>
      {/* Calories Section */}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
          {item.calories} Cal
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
