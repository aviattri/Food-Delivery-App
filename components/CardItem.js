import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const CardItem = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderWidth: 2,
        borderRadius: SIZES.radius,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
      }}
      onPress={onPress}
    >
      {/* Card Image */}
      <View
        style={{
          width: 60,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
        }}
      >
        {/* Card Image */}
        <Image
          resizeMode="contain"
          style={{ width: 35, height: 35 }}
          source={item.icon}
        />
      </View>
      <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.h3 }}>
        {item.name}
      </Text>
      {/* Radio Button */}
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{
          width: 25,
          height: 25,
        }}
      />
    </TouchableOpacity>
  );
};

export default CardItem;
