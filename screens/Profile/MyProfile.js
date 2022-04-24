import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  DisplayText,
  Header,
  IconButton,
  LineDivider,
  TextButton,
} from "../../components";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

const MyProfile = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.width * 0.15,
        }}
        title="MY ACCOUNT"
        leftComponent={
          <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 5 }}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={{ color: COLORS.orange, ...FONTS.h3 }}>Edit</Text>
          </TouchableOpacity>
        }
      />
    );
  }
  function renderTopInfoBox() {
    return (
      <View
        style={{
          height: SIZES.height / 4.1,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Full Name */}
        <DisplayText title={"Full Name"} description={"Gobe Durant"} />
        {/* Phone Number */}
        <DisplayText title={"Phone Number"} description={"041-424-424"} />
        {/* Date Of Birth */}
        <DisplayText
          title={"Date of Birth"}
          description={"20/05/1994"}
          displayLineDivider={false}
        />
      </View>
    );
  }
  function renderBottomInfoBox() {
    return (
      <View
        style={{
          height: SIZES.height / 2,
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* ID CARD */}
        <DisplayText title={"ID Card"} description={"Not Updated"} />
        {/* DOB */}
        <DisplayText title={"Date of Birth"} description={"20/05/1994"} />
        {/* Gender */}
        <DisplayText title={"Gender"} description={"Male"} />
        {/* Joined Date */}
        <DisplayText title={"Joined"} description={"March 2017"} />
        {/* Joined Date */}
        <DisplayText title={"Email"} description={"GobeDurant@gmail.d"} />
        {/* Address  */}
        <DisplayText
          title={"Address"}
          description={"29 Myrtle Street"}
          displayLineDivider={false}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* user information I*/}
      {renderTopInfoBox()}
      {/* user information II*/}
      {renderBottomInfoBox()}
    </View>
  );
};

export default MyProfile;
