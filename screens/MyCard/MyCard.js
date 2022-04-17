import { View, Text } from "react-native";
import React from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import { CardItem, Header, IconButton, TextButton } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="MY CARDS"
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
        {dummyData.myCards.map((card, index) => {
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
  function renderAddNewCard() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Add new card
        </Text>
        {dummyData.allCards.map((card, index) => {
          return (
            <CardItem
              key={`NewCard-${card.id}`}
              item={card}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${card.id}`
              }
              onPress={() => setSelectedCard({ ...card, key: "NewCard" })}
            />
          );
        })}
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          label={selectedCard?.key == "NewCard" ? "Add" : "Place Your Order"}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          disabled={selectedCard == null}
          onPress={() =>
            selectedCard?.key == "NewCard"
              ? navigation.navigate("AddCard", { cardDetails: selectedCard })
              : navigation.navigate("Checkout", { cardDetails: selectedCard })
          }
        />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* My Card */}
        {renderMyCards()}

        {/* Add New Card */}
        {renderAddNewCard()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;
