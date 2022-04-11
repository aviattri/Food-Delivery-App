import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import MainLayout from "../screens/MainLayout";
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

import { connect } from "react-redux";
import { setSelectedTab } from "../store/tab/tabActions";

const Drawer = createDrawerNavigator();
const CustomDrawerItem = ({ isFocused, onPress, label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.white }}
      />
      <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}
      >
        {/* Close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile")}
        >
          <Image
            source={dummyData.myProfile.profile_image}
            style={{ height: 50, width: 50, borderRadius: SIZES.radius }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {"View Your Profile"}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Drawer items */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}
        >
          {/* 1. Home */}
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation.navigate("MainLayout");
            }}
          />
          {/* Wallet  */}
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            isFocused={selectedTab == constants.screens.my_wallet}
            onPress={() => {
              setSelectedTab(constants.screens.my_wallet);
              navigation.navigate("MainLayout");
            }}
          />
          {/* Notification */}
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              navigation.navigate("MainLayout");
            }}
          />
          {/* My Favourties */}
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.location}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              navigation.navigate("MainLayout");
            }}
          />
          {/* line divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          {/* Track Your Order */}
          <CustomDrawerItem
            label={constants.screens.track_order}
            icon={icons.location}
            isFocused={selectedTab == constants.screens.track_order}
            onPress={() => {
              setSelectedTab(constants.screens.track_order);
              navigation.navigate("MainLayout");
            }}
          />
          {/* Coupons */}
          <CustomDrawerItem
            label={constants.screens.coupon}
            icon={icons.coupon}
            isFocused={selectedTab == constants.screens.coupon}
            onPress={() => {
              setSelectedTab(constants.screens.coupon);
              navigation.navigate("MainLayout");
            }}
          />

          {/* Settings */}
          <CustomDrawerItem
            label={constants.screens.settings}
            icon={icons.setting}
            isFocused={selectedTab == constants.screens.settings}
            onPress={() => {
              setSelectedTab(constants.screens.settings);
              navigation.navigate("MainLayout");
            }}
          />
          {/* Invite a Friend */}
          <CustomDrawerItem
            label={constants.screens.refer_friend}
            icon={icons.profile}
            isFocused={selectedTab == constants.screens.refer_friend}
            onPress={() => {
              setSelectedTab(constants.screens.refer_friend);
              navigation.navigate("MainLayout");
            }}
          />
          {/* Help Center */}
          <CustomDrawerItem
            label={constants.screens.help_center}
            icon={icons.help}
            isFocused={selectedTab == constants.screens.help_center}
            onPress={() => {
              setSelectedTab(constants.screens.help_center);
              navigation.navigate("MainLayout");
            }}
          />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <CustomDrawerItem
            label={constants.screens.logout}
            icon={icons.logout}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  console.log(selectedTab);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        screenOptions={{
          headerShown: false,
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        drawerContent={(props) => {
          return (
            <CustomDrawerContent
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              navigation={props.navigation}
            />
          );
        }}
        initialRouteName="MainLayout"
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
