import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
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

const Drawer = createDrawerNavigator();
const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.radius,
      }}
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

const CustomDrawerContent = ({ navigation }) => {
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
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          {/* Wallet  */}
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          {/* Notification */}
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          {/* My Favourties */}
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.location}
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
          />
          {/* Coupons */}
          <CustomDrawerItem
            label={constants.screens.coupon}
            icon={icons.coupon}
          />

          {/* Settings */}
          <CustomDrawerItem
            label={constants.screens.settings}
            icon={icons.setting}
          />
          {/* Invite a Friend */}
          <CustomDrawerItem
            label={constants.screens.refer_friend}
            icon={icons.profile}
          />
          {/* Help Center */}
          <CustomDrawerItem
            label={constants.screens.help_center}
            icon={icons.help}
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

const CustomDrawer = () => {
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
          return <CustomDrawerContent navigation={props.navigation} />;
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

export default CustomDrawer;
