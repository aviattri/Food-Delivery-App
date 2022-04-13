import { View, Text, Image } from "react-native";
import React, { useContext, useState } from "react";
import { AuthLayout } from "../";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import {
  CustomSwitch,
  FormInput,
  TextButton,
  TextIconButton,
} from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { utils } from "../../utils";
import { AppContext } from "../../appContext/AppContextProvider";
import disabledAlert from "../../components/Alerts";

const SignIn = ({ navigation }) => {
  const { state, authContext, dispatch } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
  }

  return (
    <AuthLayout
      title={"Lets Sign You In"}
      subTitle={"Welcome back, lets get you food"}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        {/* Form Input Secxtion */}
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
        <FormInput
          label="Password"
          secureTextEntery={!showPass}
          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) =>
            // validate email
            setPassword(value)
          }
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
        {/* Save me / forgot ForgotPassword */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label="forgotPassword"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>
        {/* SignIn */}
        <TextButton
          label="Sign in"
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
          onPress={() =>
            dispatch({ type: "SIGN_IN", token: "dummy-auth-token" })
          }
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
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{ marginLeft: 3, backgroundColor: null }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
      {/* Footer */}
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
          onPress={disabledAlert}
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
          onPress={disabledAlert}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;
