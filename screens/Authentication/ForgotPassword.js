import React, { useState } from "react";
import { View, Image } from "react-native";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEnableSignIn() {
    return email != "" && emailError == "";
  }

  return (
    <AuthLayout
      title={"Password Recovery"}
      subTitle={"Please enter your email address to recover your password"}
      titleContainerStyle={{ marginTop: SIZES.padding }}
    >
      {/* text input */}
      <FormInput
        label="Email"
        containerStyle={{
          marginTop: SIZES.padding,
        }}
        keyboardType="email-address"
        autoCompleteType="email"
        onChange={(value) =>
          // validate email
          {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }
        }
        errorMsg={emailError}
        appendComponent={
          <View style={{ justifyContent: "center" }}>
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor:
                  email == ""
                    ? COLORS.gray
                    : email != "" && emailError == ""
                    ? COLORS.green
                    : COLORS.red,
              }}
              source={
                email == "" || (email != "" && emailError == "")
                  ? icons.correct
                  : icons.cancel
              }
            />
          </View>
        }
      />
      {/* submit button  */}
      <TextButton
        label="Send Email"
        disabled={isEnableSignIn() ? false : true}
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableSignIn()
            ? COLORS.primary
            : COLORS.transparentPrimary,
        }}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
