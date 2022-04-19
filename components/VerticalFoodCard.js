import { View, Text, Image, ImageStore } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, isFavourite, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Calories and Favorite Section */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* calories */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image source={icons.calories} style={{ width: 30, height: 30 }} />
          <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
            {item.calories} Cal
          </Text>
        </View>
        {/* Favourite */}
        <Image
          source={icons.love}
          style={{
            width: 20,
            height: 20,
            tintColor: isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>

      {/* Product Image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={item.image} style={{ height: "100%", width: "100%" }} />
      </View>

      {/* Info */}
      <View
        style={{
          alignItems: "center",
          marginTop: -20,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text
          style={{
            color: COLORS.darkGray2,
            textAlign: "center",
            ...FONTS.body5,
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{ ...FONTS.body2, marginTop: SIZES.base }}
        >{`$ ${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
//    {/* Name  */}
//    <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
//    {/* Descritiom */}
//    <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
//      {item.description}
//    </Text>
//    {/* Price */}
