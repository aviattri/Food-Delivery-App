import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  COLORS,
  SIZES,
  icons,
  FONTS,
  constants,
  images,
} from "../../constants";
import {
  FormInput,
  Header,
  IconButton,
  Ratings,
  TextButton,
  TextIconButton,
} from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { useEffect } from "react";

const RateOrder = ({ navigation }) => {
  const [orderTip, setOrderTip] = useState(null);
  const [userRatings, setUserRatings] = useState(null);
  const [review, setReview] = useState("");
  const [orderReview, setOrderReview] = useState({});

  useEffect(() => {
    console.log(orderReview);
  }, [orderReview]);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginTop: 40,
        }}
        title="RIDER REVIEW"
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
  function renderRiderInfo() {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: SIZES.padding,
        }}
      >
        {/* Rider Image */}
        <Image
          source={images.profile}
          style={{
            width: 100,
            height: 100,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
          }}
        />
        {/* Rider Details */}
        <Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>Mr. Curry</Text>
        {/* Rider Details */}
        <Text style={{ ...FONTS.body4 }}>Delivery Man</Text>
      </View>
    );
  }
  function renderRatings() {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Ratings
          ratings={3}
          setUserRating={setUserRatings}
          iconStyle={{
            marginLeft: SIZES.radius,
            height: 30,
            width: 30,
          }}
          containerStyle={{
            marginVertical: SIZES.radius,
            alignItems: "center",
          }}
        />
      </View>
    );
  }
  function renderTips() {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {constants.tips.map((item, index) => {
          return (
            <TextIconButton
              labelStyle={{
                paddingHorizontal: SIZES.radius,
                color: item.id == orderTip ? COLORS.white : COLORS.gray,
                ...FONTS.body3,
              }}
              containerStyle={{
                flex: 1,
                height: 50,
                margin: 5,
                alignItems: "center",
                borderRadius: SIZES.base,
                backgroundColor:
                  item.id == orderTip ? COLORS.primary : COLORS.lightGray2,
                borderColor: COLORS.gray,
                borderWidth: 1,
              }}
              label={item.label}
              icon={icons.star}
              key={`ratings-${index}`}
              onPress={() => setOrderTip(item.id)}
            />
          );
        })}
      </View>
    );
  }
  function renderDetails() {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingTop: SIZES.radius,
            color: COLORS.green,
            ...FONTS.body4,
          }}
        >
          {`● Order Delivered`}
        </Text>
      </View>
    );
  }
  function renderOrderReview() {
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
            }}
          >
            {`Please rate our delivery service`}
          </Text>
          {renderRatings()}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            paddingTop: SIZES.radius,
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              paddingBottom: SIZES.radius,
            }}
          >
            {`Add Tips`}
          </Text>
          {renderTips()}
        </View>
      </>
    );
  }
  function renderFooter() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <FormInput
          containerStyle={{
            height: 250,
            alignItems: "center",
            marginTop: SIZES.padding,
            backgroundColor: COLORS.lightGray2,
            borderRadius: SIZES.radius,
          }}
          placeHolder={"Add Review"}
          onChange={(value) => setReview(value)}
        />
        <TextButton
          buttonContainerStyle={{
            marginVertical: SIZES.padding,
            height: 60,
            width: "100%",
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
          }}
          label={"Submit Review"}
          labelStyle={{ color: COLORS.white }}
          onPress={() => {
            setOrderReview({
              ratings: userRatings ?? 0,
              orderTip: orderTip ?? "No Tips",
              review: review,
            });
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      >
        {/* RiderInfo */}
        {renderRiderInfo()}
        {/* OrderDetails */}
        {renderDetails()}
        {/* Order Review  */}
        {renderOrderReview()}
        {/* Footer */}
        {renderFooter()}
      </ScrollView>
    </View>
  );
};

export default RateOrder;
