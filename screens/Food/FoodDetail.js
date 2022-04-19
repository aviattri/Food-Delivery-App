import { View, Text, Image } from "react-native";
import React from "react";
import {
  COLORS,
  dummyData,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";
import {
  CartQuantityButton,
  Header,
  IconButton,
  LineDivider,
  Ratings,
  StepperInput,
  TextButton,
  TextIconButton,
} from "../../components";

import { connect } from "react-redux";
import { setCartItem } from "../../store/cart/cartActions";

import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const FoodDetail = ({ navigation, route, myCart, setCartItem }) => {
  const [orderTag, setOrderTag] = useState("Ratings");
  const [foodSize, setFoodSize] = useState("");
  const [stepperValue, setStepperValue] = useState(0);

  const { foodDetail } = route.params;
  // console.log(foodDetail);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="DETAILS"
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
        rightComponent={
          <CartQuantityButton
            quantity={myCart.length ?? 0}
            onPress={() => navigation.navigate("MyCart")}
          />
        }
      />
    );
  }
  function renderDetail() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories and Favorite Section */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* calories */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                {foodDetail?.calories} Calories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodDetail.isFavourite
                  ? COLORS.primary
                  : COLORS.gray,
              }}
            />
          </View>
          {/* Food Image */}
          <Image
            source={foodDetail.image}
            resizeMode="contain"
            style={{ width: "100%", height: 200 }}
          />
        </View>

        {/* Food Information */}
        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h1 }}>{foodDetail.name}</Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodDetail.description}
          </Text>
        </View>
        {/* Order detail- Rating, Duration, Shipping */}
        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Ratings */}
          <TextIconButton
            containerStyle={{
              height: 30,
              borderRadius: SIZES.radius,
              backgroundColor: orderTag == "Ratings" ? COLORS.primary : null,
              alignItems: "center",
              justifyContent: "center",
            }}
            label={"4.5"}
            labelStyle={{
              color: orderTag == "Ratings" ? COLORS.white : COLORS.black,
              marginRight: SIZES.radius,
              ...FONTS.h3,
            }}
            iconPosition={"LEFT"}
            icon={icons.star}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: orderTag == "Ratings" ? COLORS.white : COLORS.black,
              paddingRight: SIZES.padding,
            }}
            onPress={() => setOrderTag("Ratings")}
          />
          {/* Time */}
          <TextIconButton
            containerStyle={{
              height: 30,
              backgroundColor: orderTag == "Time" ? COLORS.primary : null,
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
            }}
            label={`${30} mins`}
            labelStyle={{
              color: orderTag == "Time" ? COLORS.white : COLORS.black,
              marginRight: SIZES.radius,
              ...FONTS.h3,
            }}
            iconPosition={"LEFT"}
            icon={icons.clock}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: orderTag == "Time" ? COLORS.white : COLORS.black,
              paddingRight: SIZES.padding,
            }}
            onPress={() => setOrderTag("Time")}
          />
          {/* Shipping */}
          <TextIconButton
            containerStyle={{
              height: 30,
              backgroundColor: orderTag == "Shipping" ? COLORS.primary : null,
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
            }}
            label={"Free Shipping"}
            labelStyle={{
              color: orderTag == "Shipping" ? COLORS.white : COLORS.black,
              marginRight: SIZES.radius,
              ...FONTS.h3,
            }}
            iconPosition={"LEFT"}
            icon={icons.dollar}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: orderTag == "Shipping" ? COLORS.white : COLORS.black,
              paddingRight: SIZES.padding,
            }}
            onPress={() => setOrderTag("Shipping")}
          />
        </View>

        {/* SIZES */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Sizes: </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginLeft: SIZES.padding,
            }}
          >
            {dummyData?.sizes?.map((item, index) => {
              return (
                <TextButton
                  label={item.label}
                  key={`sizes-${index}`}
                  labelStyle={{
                    color: foodSize == item.label ? COLORS.white : COLORS.gray2,
                    ...FONTS.body2,
                  }}
                  buttonContainerStyle={{
                    backgroundColor:
                      foodSize == item.label ? COLORS.primary : null,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.gray2,
                    borderWidth: 1,
                    width: 55,
                    height: 55,
                    margin: SIZES.base,
                  }}
                  onPress={() => setFoodSize(item.label)}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
  function renderRestuarant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Restuarant Image */}
        <Image
          resizeMode="contain"
          source={images.hot_delivery}
          style={{ width: 50, height: 50 }}
        />
        {/* Restuarant info */}
        <View style={{ flexDirection: "column", marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h3 }}>Totya Food</Text>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            600m away from you
          </Text>
        </View>
        {/* Restuarant Rating */}
        <Ratings
          rating={3}
          iconStyle={{
            marginLeft: 3,
          }}
          containerStyle={{
            marginLeft: SIZES.padding,
            alignItems: "center",
          }}
        />
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 120,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* Stepper Button */}
        <StepperInput
          containerStyle={{}}
          value={stepperValue}
          onAdd={() =>
            setStepperValue(stepperValue < 20 ? stepperValue + 1 : 20)
          }
          onMinus={() =>
            setStepperValue(stepperValue > 0 ? stepperValue - 1 : 0)
          }
        />
        {/* Buy Button */}
        <TextButton
          label={`Buy Now`}
          label2={`$${foodDetail.price}`}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.h3,
          }}
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => {
            //dispatch
            setCartItem({ ...foodDetail, qty: stepperValue });
            navigation.navigate("MyCart");
          }}
          disabled={false}
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <ScrollView>
        {/* Food DETAILS */}
        {renderDetail()}
        {/* LineDivider */}
        <LineDivider />
        {/* Restaurant */}
        {renderRestuarant()}
        {/* LineDivider */}
        <LineDivider />
        {/* Render Footer */}
        {renderFooter()}
      </ScrollView>
      {/* Footer */}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    myCart: state.cartReducer.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setCartItem: (foodItem) => {
      return dispatch(setCartItem(foodItem));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail);
