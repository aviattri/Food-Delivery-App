import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, dummyData, icons, SIZES } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Ratings = ({
  rating,
  containerStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
  iconStyle,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        ...containerStyle,
      }}
    >
      {dummyData.ratings.map((item, index) => {
        return (
          <Image
            key={`star-${index}`}
            source={icons.star}
            style={{
              tintColor: rating - 1 >= index ? activeColor : inactiveColor,
              ...styles.rateIcon,
              ...iconStyle,
            }}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});

export default Ratings;
