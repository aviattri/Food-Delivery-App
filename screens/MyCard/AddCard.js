import { View, Image, ImageBackground, Text } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, icons, SIZES, images, FONTS } from "../../constants";
import { utils } from "../../utils";
import {
  FormInput,
  FormInputCheck,
  Header,
  IconButton,
  RadioButton,
  TextButton,
} from "../../components";
import { useState } from "react";
import { useEffect } from "react";

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  function isEnabledCard() {
    return (
      cardNumber != "" &&
      cardName != "" &&
      expiryDate != "" &&
      cvv != "" &&
      cardNumberError == "" &&
      cardNumberError == "" &&
      cvvError == "" &&
      expiryDateError == ""
    );
  }

  useEffect(() => {
    const { cardDetails } = route.params;
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
        title="ADD NEW CARD"
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
  function renderCard() {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />
        {/* Card Details */}
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {/* Card holder name */}
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{cardName}</Text>
          {/* Card Number */}
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>
              {cardNumber}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
  function renderForm() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        {/* Card Number */}
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          autoCompleteType="number"
          maxLength={19}
          value={cardNumber}
          onChange={(value) =>
            // validate email
            {
              utils.validateInput(value, 19, setCardNumberError);
              setCardNumber(
                value
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()
              );
            }
          }
          errorMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />
        {/* Cardholder Name */}
        <FormInput
          label="Cardholder Name"
          value={cardName}
          autoCompleteType="number"
          onChange={(value) =>
            // validate
            {
              utils.validateInput(value, 1, setCardNameError);
              setCardName(value);
            }
          }
          errorMsg={setCardNameError}
          appendComponent={
            <FormInputCheck value={cardName} error={cardNameError} />
          }
          containerStyle={{
            marginTop: SIZES.padding,
          }}
        />
        {/* Expiry Date */}
        <View
          style={{
            marginTop: SIZES.padding,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormInput
            label="Expiry Date"
            placeHolder={"MM/YY"}
            maxLength={5}
            value={expiryDate}
            containerStyle={{
              flex: 1,
            }}
            onChange={(value) =>
              // validate
              {
                utils.validateInput(value, 5, setExpiryDateError);
                setExpiryDate(value);
              }
            }
            errorMsg={expiryDateError}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />
          <FormInput
            label="CVV"
            maxLength={3}
            onChange={(value) =>
              // validate
              {
                utils.validateInput(value, 3, setCvvError);
                setCvv(value);
              }
            }
            errorMsg={cvvError}
            appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
          />
        </View>
        {/* Remember me */}
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "flex-start",
          }}
        >
          <RadioButton
            label={"Remember my card details"}
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          label={"Add"}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: !isEnabledCard() ? COLORS.gray : COLORS.primary,
          }}
          disabled={!isEnabledCard()}
          onPress={() =>
            navigation.navigate("Checkout", { cardDetails: selectedCard })
          }
        />
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Card Body  */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          marginBottom: SIZES.padding * 2,
        }}
      >
        {/* Card */}
        {renderCard()}
        {/* Form  */}
        {renderForm()}
      </KeyboardAwareScrollView>
      {/* Footer  */}
      {renderFooter()}
    </View>
  );
};

export default AddCard;
