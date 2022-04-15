import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./CustomDrawer";

import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  Home,
  FoodDetail,
  Cart,
} from "../screens";

import { AppContext } from "../appContext/AppContextProvider";

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
          <>
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Home"
              component={CustomDrawer}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="FoodDetail"
              component={FoodDetail}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Cart"
              component={Cart}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
