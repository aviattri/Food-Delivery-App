import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, icons, FONTS } from "../../constants";
import { CustomSwitch, FormInput, Header, IconButton } from "../../components";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

const NotificationSettings = ({ navigation }) => {
  const [saveMe, setSaveMe] = useState(false);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="NOTIFICATION"
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
  function renderNotificationSlider() {
    return (
      <View
        style={{
          flexDirection: "row",
          //   justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: COLORS.lightGray2,
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          height: SIZES.padding * 4,
          padding: SIZES.padding,
        }}
      >
        <Image
          source={icons.notification}
          style={{ height: 30, width: 30, tintColor: COLORS.primary }}
        />
        <View
          style={{
            flex: "column",
            padding: SIZES.radius,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Notification</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body5 }}>
            You Will recive daily Notifications
          </Text>
        </View>
        <View style={{ marginLeft: SIZES.padding * 1.5 }}>
          <CustomSwitch
            label={false}
            value={!saveMe}
            onChange={(value) => setSaveMe(value)}
          />
        </View>
      </View>
    );
  }
  function renderPromoNotificationSlider() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.lightGray2,
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          height: SIZES.padding * 4,
          padding: SIZES.padding,
        }}
      >
        <Image
          source={icons.notification}
          style={{ height: 30, width: 30, tintColor: COLORS.primary }}
        />
        <View
          style={{
            flex: "column",
            padding: SIZES.radius,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Promotional Notifications</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body5 }}>
            You Will recive daily Updates
          </Text>
        </View>
        <View style={{ marginLeft: SIZES.padding }}>
          <CustomSwitch
            label={false}
            value={saveMe}
            onChange={(value) => setSaveMe(value)}
          />
        </View>
      </View>
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
      {/* Notification slider */}
      {renderNotificationSlider()}

      {/* promotional notifications slider */}
      {renderPromoNotificationSlider()}
    </View>
  );
};

export default NotificationSettings;
