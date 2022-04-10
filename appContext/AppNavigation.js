import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  Home,
} from "../screens";

import { AppContext } from "./AppContextProvider";

const Stack = createStackNavigator();

const AppNavigation = () => {
  const { state } = useContext(AppContext);
  console.log(state);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        {state.userToken == null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />

            <Stack.Screen name="SignIn" component={SignIn} />

            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            <Stack.Screen name="Otp" component={Otp} />
          </>
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
