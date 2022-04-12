import { View, Text } from "react-native";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import React from "react";

const animatedStyles = () => {
  //Reanimated Shared value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);
  return <></>;
};

//Reanimated Animated value
const homeFlexStyle = useAnimatedStyle(() => {
  return {
    flex: homeTabFlex.value,
  };
});

const homeColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: homeTabColor.value,
  };
});
const searchFlexStyle = useAnimatedStyle(() => {
  return {
    flex: searchTabFlex.value,
  };
});
const searchColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: searchTabColor.value,
  };
});
const cartFlexStyle = useAnimatedStyle(() => {
  return {
    flex: cartTabFlex.value,
  };
});
const cartColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: cartTabColor.value,
  };
});
const favouriteFlexStyle = useAnimatedStyle(() => {
  return {
    flex: favouriteTabFlex.value,
  };
});
const favouriteColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: favouriteTabColor.value,
  };
});
const notificationFlexStyle = useAnimatedStyle(() => {
  return {
    flex: notificationTabFlex.value,
  };
});
const notificationColorStyle = useAnimatedStyle(() => {
  return {
    backgroundColor: notificationTabColor.value,
  };
});

export default {
  homeFlexStyle,
  homeColorStyle,
  searchFlexStyle,
  searchColorStyle,
  cartFlexStyle,
  cartColorStyle,
  favouriteFlexStyle,
  favouriteColorStyle,
  notificationFlexStyle,
  notificationColorStyle,
};
