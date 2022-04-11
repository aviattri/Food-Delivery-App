import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const MainLayout = (props) => {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderTopLeftRadius = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const borderBottomLeftRadius = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const animatedStyle = {
    borderTopLeftRadius,
    borderBottomLeftRadius,
    tranform: [{ scale }],
  };
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        ...animatedStyle,
      }}
    >
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
