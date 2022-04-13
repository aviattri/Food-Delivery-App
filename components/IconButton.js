import { View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ height: 30, width: 30, ...iconStyle }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
