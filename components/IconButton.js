import { View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

const IconButton = ({ containerStyle, icon, iconStyle, onPress, expoIcon }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      {!expoIcon && (
        <Image
          source={icon}
          resizeMode="contain"
          style={{ height: 30, width: 30, ...iconStyle }}
        />
      )}
      {expoIcon && <Entypo name={icon} size={24} color="black" />}
    </TouchableOpacity>
  );
};

export default IconButton;
