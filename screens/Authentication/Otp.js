import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import { COLORS, FONTS, SIZES } from "../../constants";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { TextButton } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../appContext/AppContextProvider";

const Otp = () => {
  const { state, authContext, dispatch } = useContext(AppContext);

  const [timer, setTimer] = useState(60);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AuthLayout
      title={"OTP Authentication"}
      subTitle={
        "An authentication code has been sent to avirajattri8@gmail.com"
      }
      titleContainerStyle={{ marginTop: SIZES.padding }}
    >
      {/* OTP input */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OTPInputView
          pinCount={4}
          style={{ width: "100%", height: 50 }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeChanged={(code) => {
            console.log(code);
          }}
        />
        {/* countdown Timer */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>
            Didnt receive code?
          </Text>
          <TextButton
            label={`resend (${timer}s)`}
            disabled={timer == 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      {/* Footer */}
      <View>
        <TextButton
          label={"continue"}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() =>
            Alert.alert("Success", "Your account has been created", [
              {
                text: "OK",
                onPress: () =>
                  dispatch({ type: "SIGN_IN", token: "dummy-auth-token" }),
              },
            ])
          }
        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.darkgray,
            }}
          >
            By Signing up you agree to our terms and conditions
          </Text>
          <TextButton
            label={"terms&Conditions"}
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => console.log("T&C")}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
