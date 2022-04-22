import { View, Text, FlatList } from "react-native";
import React from "react";
import { Header, IconButton, OrderCard, TextButton } from "../../components";
import { CouponLayout } from "../../components";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { useState } from "react";
const MyCoupons = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState("");

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.padding * 2,
        }}
        title="MY COUPONS"
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
            onPress={() => navigation.navigate("Home")}
          />
        }
      />
    );
  }
  function renderTopButtons() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 40,
          marginBottom: SIZES.radius,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* My Orders */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            height: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
            marginHorizontal: SIZES.radius,
            backgroundColor:
              selectedButton == 0 ? COLORS.primary : COLORS.lightGray2,
          }}
          label={"Available"}
          labelStyle={{
            paddingHorizontal: SIZES.padding,
            color: selectedButton == 0 ? COLORS.white : COLORS.primary,
          }}
          onPress={() => {
            setSelectedButton(0);
          }}
        />
        {/* Upcoming */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            height: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
            marginHorizontal: SIZES.radius,
            backgroundColor:
              selectedButton == 1 ? COLORS.primary : COLORS.lightGray2,
          }}
          label={"Used"}
          labelStyle={{
            paddingHorizontal: SIZES.padding,
            color: selectedButton == 1 ? COLORS.white : COLORS.primary,
          }}
          onPress={() => {
            setSelectedButton(1);
          }}
        />
      </View>
    );
  }
  function renderCoupons() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        <FlatList
          data={dummyData.coupons}
          keyExtractor={(item, index) => `coupon-${index}`}
          vertical
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: 200, marginBottom: SIZES.radius }}></View>
          }
          renderItem={({ item, index }) => (
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
              {<CouponLayout coupon={item} />}
            </View>
          )}
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
      {/* Top Buttons */}
      {renderTopButtons()}
      {/* Couponslist */}
      {renderCoupons()}
    </View>
  );
};

export default MyCoupons;
