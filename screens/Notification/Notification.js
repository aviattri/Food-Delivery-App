import { View, Text } from "react-native";
import React from "react";
import { NotificationItems } from "../../components";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";

const Notification = ({ navigation }) => {
  function renderCouponList() {
    return (
      <View style={{}}>
        {dummyData.notifications.map((item, index) => {
          return (
            <NotificationItems
              key={`MyCard-${item.id}`}
              item={item}
              // isSelected={
              //   `${selectedCard?.key}-${selectedCard?.id}` ==
              //   `MyCard-${card.id}`
              // }
              // onPress={() => setSelectedCard({ ...card, key: "MyCard" })}
            />
          );
        })}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* couponList */}
        {renderCouponList()}
      </ScrollView>
    </View>
  );
};

export default Notification;
