import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { SIZES, COLORS, icons, FONTS } from "../../constants";
import { FormInput, TextButton, TextIconButton } from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEnableSignUp() {
    return (
      email != "" &&
      password != "" &&
      userName != "" &&
      emailError == "" &&
      usernameError == "" &&
      passwordError == ""
    );
  }
  return (
    <AuthLayout
      title="Getting Started"
      subTitle="Create an account to continue!"
      titleContainerStyle={{
        maringTop: SIZES.radius,
      }}
    >
      {/* form input  */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        {/* email */}
        <FormInput
          label="Email"
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
        {/* username */}
        <FormInput
          label="Username"
          keyboardType="email-address"
          autoCompleteType="email"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate email
            {
              setUserName(value);
            }
          }
          errorMsg={usernameError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    userName == ""
                      ? COLORS.gray
                      : userName != "" && usernameError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
                source={
                  userName == "" || (userName != "" && usernameError == "")
                    ? icons.correct
                    : icons.cancel
                }
              />
            </View>
          }
        />
        {/* password */}
        <FormInput
          label="Password"
          secureTextEntery={!showPass}
          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate password
            {
              utils.validatePassword(value, setPasswordError);
              setPassword(value);
            }
          }
          errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                marginTop: SIZES.body3,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: COLORS.gray }}
                source={showPass ? icons.eye_close : icons.eye}
              />
            </TouchableOpacity>
          }
        />
        {/* signup  */}
        <TextButton
          label="Sign Up"
          disabled={isEnableSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate("Otp")}
        />
        {/* SignUp */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Have have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      {/* footer */}
      <View>
        {/* Facebook Button */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: COLORS.white,
          }}
          label="Continue with Facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          onPress={() => console.log("facebook")}
        />
        {/* Google Button */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: null,
          }}
          label="Continue with Google"
          labelStyle={{
            marginLeft: SIZES.radius,
          }}
          onPress={() => console.log("Google")}
        />
      </View>
    </AuthLayout>
  );
};

export default SignUp;
