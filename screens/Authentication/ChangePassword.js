import { View } from "react-native";
import React from "react";
import {
  Header,
  IconButton,
  TextButton,
  VerticalFormInput,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import { useState } from "react";

const ChangePassword = ({ navigation, onChangePassord }) => {
  const [disable, setDisable] = useState(false);
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.width * 0.15,
        }}
        title="CHANGE PASSWORD"
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
  function renderInputBox() {
    return (
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <View
          style={{
            height: SIZES.height / 2.8,
            marginHorizontal: SIZES.padding,
            backgroundColor: COLORS.lightGray2,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
          }}
        >
          {/* Current Password*/}
          <VerticalFormInput
            label={"Current Password"}
            onChange={(value) => setName(value)}
            icon={"eye"}
          />
          {/* New Password */}
          <VerticalFormInput
            label={"New Password"}
            onChange={(value) => setName(value)}
            icon={"eye"}
          />
          {/* Re-type Password */}
          <VerticalFormInput
            label={"Re-type Password"}
            onChange={(value) => setName(value)}
            icon={"eye"}
          />
        </View>
      </View>
    );
  }
  function renderFooter() {
    return (
      <TextButton
        disabled={disable}
        buttonContainerStyle={{
          marginBottom: SIZES.padding * 2,
          borderRadius: SIZES.radius,
          backgroundColor: disable ? COLORS.gray : COLORS.primary,
          height: 60,
          marginHorizontal: SIZES.padding,
        }}
        label={"Change Password"}
        onPress={onChangePassord}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* user information I*/}
      {renderInputBox()}
      {renderFooter()}
    </View>
  );
};

export default ChangePassword;
