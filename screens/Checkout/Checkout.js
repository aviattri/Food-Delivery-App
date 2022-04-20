import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  CardItem,
  FormInput,
  Header,
  IconButton,
  FooterTotal,
} from "../../components";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setCartItem, setUpdateCart } from "../../store/cart/cartActions";

const Checkout = ({ navigation, route, cartTotal }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  useEffect(() => {
    let { cardDetails } = route.params;
    setSelectedCard(cardDetails);
  }, []);
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="CHECKOUT"
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
  function renderMyCards() {
    return (
      <View style={{}}>
        {selectedCard &&
          dummyData.myCards.map((card, index) => {
            return (
              <CardItem
                key={`MyCard-${card.id}`}
                item={card}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ==
                  `MyCard-${card.id}`
                }
                onPress={() => setSelectedCard({ ...card, key: "MyCard" })}
              />
            );
          })}
      </View>
    );
  }
  function renderDeliveryAddress() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image
            source={icons.location1}
            style={{
              marginLeft: SIZES.radius,
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.radius,
              width: "85%",
              ...FONTS.body3,
            }}
          >
            29 Myrtle Street Chippendale, Sydeny, NSW, AU
          </Text>
        </View>
      </View>
    );
  }
  function renderCoupons() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 1,
            borderColor: COLORS.lightGray1,
            backgroundColor: COLORS.white,
            overflow: "hidden",
            ...FONTS.h4,
          }}
          inputStyle={{
            ...FONTS.body3,
          }}
          placeHolder="Coupon Code"
          appendComponent={
            <View
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: SIZES.radius,
                borderBottomRightRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            >
              <Image source={icons.coupon} style={{ height: 40, width: 40 }} />
            </View>
          }
          onChange={() => console.log("coupon code")}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Body  */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          marginBottom: SIZES.padding * 2,
          height: 500,
        }}
      >
        {/* My Cards */}
        {renderMyCards()}
        {/* My Delivery Address */}
        {renderDeliveryAddress()}
        {/* Coupon Code */}
        {renderCoupons()}
      </KeyboardAwareScrollView>
      {/* Footer  */}
      <FooterTotal
        subTotal={cartTotal?.orderPrice?.subTotal ?? 0}
        shippingFess={cartTotal?.orderPrice?.shippingFess ?? 0}
        total={cartTotal?.orderPrice?.total ?? 0}
        onPress={() => navigation.navigate("Success")}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    myCart: state.cartReducer.cart,
    cartTotal: state.cartReducer.cartTotal,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setUpdateCart: (cart) => {
      return dispatch(setUpdateCart(cart));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
