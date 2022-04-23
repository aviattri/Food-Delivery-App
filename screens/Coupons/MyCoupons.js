import {
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Header, IconButton, OrderCard, TextButton } from "../../components";
import { CouponLayout } from "../../components";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

import { connect } from "react-redux";
import { setUpdateCoupon } from "../../store/coupons/couponActions";
import { useEffect } from "react";
import curretDate from "../../utils/currentTime";

const MyCoupons = ({ navigation, setUpdateCoupon, coupons }) => {
  const [selectedButton, setSelectedButton] = useState("");
  const [couponList, setCouponList] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const showIndicator = () => {
    setIsLoading(true);
    let loadAssets = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      loadAssets;
    };
  };

  useEffect(() => {
    setCouponList(coupons);
  }, [coupons]);

  const redeemCoupon = (item) => {
    showIndicator();
    setUpdateCoupon({ ...item, redeemStatus: true, redeemedAt: curretDate });
  };

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
            showIndicator();
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
            showIndicator();
            setSelectedButton(1);
          }}
        />
      </View>
    );
  }
  function renderUnusedCoupons() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        <FlatList
          data={couponList}
          keyExtractor={(item, index) => `coupon-${index}`}
          vertical
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: 200, marginBottom: SIZES.radius }}></View>
          }
          renderItem={({ item, index }) =>
            !item.redeemStatus && (
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Confirm",
                    "You are going to redeem this coupon for " + item.name,
                    [
                      {
                        text: "Cancel",
                        onPress: () => "",
                        style: "cancel",
                      },
                      { text: "OK", onPress: () => redeemCoupon(item) },
                    ]
                  )
                }
                style={{ flex: 1, marginTop: SIZES.padding }}
              >
                {<CouponLayout coupon={item} />}
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }
  function renderUsedCoupons() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        <FlatList
          data={couponList}
          keyExtractor={(item, index) => `coupon-${index}`}
          vertical
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: 200, marginBottom: SIZES.radius }}></View>
          }
          renderItem={({ item, index }) =>
            item.redeemStatus && (
              <TouchableOpacity
                disabled={true}
                onPress={() =>
                  Alert.alert(
                    "Confirm",
                    "You are going to redeem this coupon for " + item.name,
                    [
                      {
                        text: "Cancel",
                        onPress: () => "",
                        style: "cancel",
                      },
                      { text: "OK", onPress: () => redeemCoupon(item) },
                    ]
                  )
                }
                style={{ flex: 1, marginTop: SIZES.padding }}
              >
                {<CouponLayout coupon={item} />}
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            marginTop: SIZES.padding,
            marginBottom: -SIZES.padding,
            height: "20%",
            backgroundColor: COLORS.white,
            flexDirection: "column",
          }}
        >
          {/* Header */}
          {renderHeader()}
          {/* Top Buttons */}
          {renderTopButtons()}
        </View>

        {/* UnusedCouponslist */}
        {selectedButton == 0 && renderUnusedCoupons()}
        {/* UnusedCouponslist */}
        {selectedButton == 1 && renderUsedCoupons()}
      </View>

      {/* indicator */}
      {isLoading && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.transparentBlack1,
          }}
        >
          {isLoading && <ActivityIndicator size="large" color={COLORS.black} />}
        </View>
      )}
    </>
  );
};

function mapStateToProps(state) {
  console.log(state.couponReducer.coupons);
  return {
    coupons: state.couponReducer.coupons,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setUpdateCoupon: (coupon) => {
      return dispatch(setUpdateCoupon(coupon));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCoupons);
