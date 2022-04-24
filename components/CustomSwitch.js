import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../constants";

const CustomSwitch = ({ value, onChange, label = true }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{ flexDirection: "row" }}>
        {/* switch */}
        <View
          style={value ? styles.swtichOnContainer : styles.switchOffContainer}
        >
          <View
            style={{
              ...styles.dot,
              backgroundColor: value ? COLORS.white : COLORS.gray,
            }}
          />
        </View>
        {/* text */}
        {label && (
          <Text
            style={{
              color: value ? COLORS.primary : COLORS.gray,
              marginLeft: SIZES.base,
              ...FONTS.base,
            }}
          >
            SAVE ME
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  swtichOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    paddingLeft: 2,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
export default CustomSwitch;
