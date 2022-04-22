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
  MyCard,
  MyCart,
  AddCard,
  Checkout,
  Success,
  DeliveryStatus,
  Map,
  MyOrders,
  MyWallet,
  RateOrder,
  MyCoupons,
  Settings,
} from "../screens";

import { AppContext } from "../appContext/AppContextProvider";

const Stack = createStackNavigator();

const AppNavigation = () => {
  const { state } = useContext(AppContext);
  // console.log(state);

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
              name="MyCart"
              component={MyCart}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Cart"
              component={Cart}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyCard"
              component={MyCard}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="AddCard"
              component={AddCard}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Checkout"
              component={Checkout}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Success"
              component={Success}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="DeliveryStatus"
              component={DeliveryStatus}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Map"
              component={Map}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="OrderHisotry"
              component={MyOrders}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyWallet"
              component={MyWallet}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="RateOrder"
              component={RateOrder}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="MyCoupons"
              component={MyCoupons}
            />
            <Stack.Screen
              screenOptions={{
                headerShown: false,
              }}
              name="Settings"
              component={Settings}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
