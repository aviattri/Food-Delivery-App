import { View, Text } from "react-native";
import React from "react";

import { connect } from "react-redux";
import LottieView from "lottie-react-native";
import { setFavouriteList } from "../../store/favourites/favouriteActions";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS } from "../../constants";
import { HorizontalFoodCard } from "../../components";

const Favourite = ({ navigation, favourites }) => {
  if (favourites?.length == 0) {
    //cart is empty
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: COLORS.black, ...FONTS.body2 }}>
            Your Don't have any favourites.
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            Start browsing exciting food now!
          </Text>
        </View>
        {/* <LottieView
          resizeMode="contain"
          style={{ flex: 1, justifyContent: "flex-start", height: 100 }}
          autoPlay
          source={require("../../assets/animations/order_food.json")}
        /> */}
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: SIZES.padding,
      }}
    >
      {/* List */}
      <FlatList
        data={favourites}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        // ListHeaderComponent={ }
        ListFooterComponent={<View style={{ height: 200 }}></View>}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 100,
              }}
              item={item}
              onPress={() =>
                navigation.navigate("FoodDetail", { foodDetail: item })
              }
            />
          );
        }}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    favourites: state.favouriteReducer.favourites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setFavouriteList: (foodItem) => {
      return dispatch(setFavouriteList(foodItem));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
