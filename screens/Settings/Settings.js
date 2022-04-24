import { View, Text, ScrollView, Icons } from "react-native";
import React from "react";
import { COLORS, SIZES, icons } from "../../constants";

import { Header, IconButton, SettingTextButton } from "../../components";

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
        <SettingTextButton
          label={"Change Password"}
          expoIcon={true}
          icon={"lock"}
          onPress={() => navigation.navigate("ChangePassword")}
        />
        <SettingTextButton label={"Preferences"} icon={icons.filter} />
        <SettingTextButton
          label={"Notifications"}
          expoIcon={true}
          icon={"bells"}
        />
        <SettingTextButton label={"Data use"} icon={icons.profile} />
        <SettingTextButton label={"Language"} icon={icons.help} />
        <SettingTextButton label={"Check Update"} icon={icons.clock} />
        <SettingTextButton label={"Contact Us"} icon={icons.call} />
        <SettingTextButton label={"Privacy Policy"} icon={icons.help} />
        <SettingTextButton
          label={"Terms and Conditions"}
          expoIcon={true}
          icon={"user"}
        />
        <SettingTextButton
          label={"Logout"}
          icon={icons.logout}
          lastItem={true}
        />
      </ScrollView>
      {/* Footer  */}
      <View style={{ marginTop: SIZES.padding, marginBottom: SIZES.radius }} />
    </View>
  );
};

export default Settings;
