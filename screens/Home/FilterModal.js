import React, { useState, useEffect, useRef } from "react";
import { View, Text, Modal, Animated, Image, Alert } from "react-native";
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from "../../constants";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  IconButton,
  TextButton,
  TextIconButton,
  TwoPointSlider,
} from "../../components";

const FilterSection = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.radius,
        ...containerStyle,
      }}
    >
      {/* label */}
      <Text style={{ ...FONTS.h3 }}>{title}</Text>
      {/* children */}
      {children}
    </View>
  );
};

const FilterModal = ({ isVisible, onClose }) => {
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [ratings, setRatings] = useState("");
  const [tags, setTags] = useState("");

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const showAlert = () => {
    Alert.alert("Easy", "Filters applied!", [
      { text: "OK", onPress: () => setShowFilterModal(false) },
    ]);
  };
  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  function renderDistance() {
    return (
      <FilterSection title={"Distance"}>
        <View style={{ alignItems: "center" }}>
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={3}
            postFix="km"
            onValueChange={() => console.log("")}
          />
        </View>
      </FilterSection>
    );
  }
  function renderDeliveryTime() {
    return (
      <FilterSection title={"Delivery Time"} containerStyle={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: SIZES.radius,
          }}
        >
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                labelStyle={{
                  color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  height: 50,
                  width: "30%",
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
                label={item.label}
                key={`delivery_time${index}`}
              />
            );
          })}
        </View>
      </FilterSection>
    );
  }
  function renderPricingRange() {
    return (
      <FilterSection title={"Pricing Range"} containerStyle={{ marginTop: 20 }}>
        <View style={{ alignItems: "center" }}>
          <TwoPointSlider
            values={[10, 50]}
            min={10}
            max={100}
            preFix="$"
            postFix="$"
            onValueChange={() => console.log("")}
          />
        </View>
      </FilterSection>
    );
  }
  function renderRatings() {
    return (
      <FilterSection title={"Rating"} containerStyle={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: SIZES.radius,
          }}
        >
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                labelStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  width: 60,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                label={item.label}
                icon={icons.star}
                iconPosition="RIGHT"
                iconStyle={{
                  height: 15,
                  width: 15,
                  tintColor: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                key={`ratings-${index}`}
                onPress={() => setRatings(item.id)}
              />
            );
          })}
        </View>
      </FilterSection>
    );
  }
  function renderTags() {
    return (
      <FilterSection title={"Tags"} containerStyle={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: SIZES.radius,
          }}
        >
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  height: 50,
                  width: "30%",
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
                label={item.label}
                key={`tags-${index}`}
              />
            );
          })}
        </View>
      </FilterSection>
    );
  }
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        {/* Tranparent background */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          />
          <Animated.View
            style={{
              top: modalY,
              width: "100%",
              height: "100%",
              padding: SIZES.padding,
              borderTopRightRadius: SIZES.padding,
              borderTopLeftRadius: SIZES.padding,
              backgroundColor: COLORS.white,
            }}
          >
            {/* Header */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ flex: 1, ...FONTS.h3 }}>Filter Your Search</Text>
              <IconButton
                containerStyle={{
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: COLORS.gray2,
                }}
                icon={icons.cross}
                iconStyle={{ tintColor: COLORS.gray2 }}
                onPress={() => setShowFilterModal(false)}
              />
            </View>
            {/* ScrollView */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 250 }}
            >
              {/* Distance */}
              {renderDistance()}
              {/* Delivery Time */}
              {renderDeliveryTime()}
              {/* Pricing Range */}
              {renderPricingRange()}
              {/* Rating */}
              {renderRatings()}
              {/* Tags */}
              {renderTags()}
              {/* Apply Filter Button */}
              <TextButton
                label="Apply Filter"
                // disabled={isEnableSignIn() ? false : true}
                buttonContainerStyle={{
                  height: 55,
                  alignItems: "center",
                  marginTop: SIZES.padding,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.primary,
                }}
                onPress={() => showAlert()}
              />
            </ScrollView>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default FilterModal;
