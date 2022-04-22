import { View, Text, ScrollView, Icons } from "react-native";
import React from "react";
import { COLORS, SIZES, icons, dummyData, FONTS } from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  Header,
  IconButton,
  LineDivider,
  TextButton,
  TextIconButton,
} from "../../components";

const Settings = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="SETTINGS"
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
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Body  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          marginHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
        }}
      >
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Change Password"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          expoIcon={true}
          icon={"lock"}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Preferences"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          icon={icons.filter}
          iconStyle={{ tintColor: COLORS.primary }}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Notifications"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          expoIcon={true}
          icon={"bells"}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Data use"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          icon={icons.profile}
          iconStyle={{ tintColor: COLORS.primary }}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Language"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          icon={icons.help}
          iconStyle={{ tintColor: COLORS.primary }}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Check Update"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          icon={icons.clock}
          iconStyle={{ tintColor: COLORS.primary }}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Contact Us"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          expoIcon={false}
          icon={icons.call}
          iconStyle={{ tintColor: COLORS.primary }}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Privacy Policy"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          icon={icons.help}
          iconStyle={{ tintColor: COLORS.primary }}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Terms and Conditions"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          expoIcon={true}
          icon={"user"}
        />
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.gray2,
          }}
        />
        <TextIconButton
          containerStyle={{
            height: 75,
            width: "100%",
            justifyContent: "flex-start",
          }}
          label={"Logout"}
          labelStyle={{ paddingHorizontal: SIZES.padding, ...FONTS.body3 }}
          iconPosition={"LEFT"}
          icon={icons.logout}
          iconStyle={{ tintColor: COLORS.primary }}
        />
      </ScrollView>
      {/* Footer  */}
      <View style={{ marginTop: SIZES.padding, marginBottom: SIZES.radius }} />
    </View>
  );
};

export default Settings;
