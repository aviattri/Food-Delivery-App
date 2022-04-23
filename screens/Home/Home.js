import { View, Text, Image, ActivityIndicator } from "react-native";
import { useState } from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useEffect } from "react";
import {
  HorizontalFoodCard,
  VerticalFoodCard,
  Section,
} from "../../components";

import { connect } from "react-redux";
import { setProducts } from "../../store/products/productActions";
import { setLoadCoupons } from "../../store/coupons/couponActions";

import FilterModal from "./FilterModal";

const Home = ({
  navigation,
  setProducts,
  favourites,
  coupons,
  setLoadCoupons,
}) => {
  const [selectedCatergoryId, setSelectedCatergoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [popularFood, setPopularFood] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadAssets = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    //load products to store
    setProducts(dummyData.products);
    handleChangeCategory(selectedCatergoryId, selectedMenuType);

    //load coupons if empty
    if (!(coupons && coupons.length)) {
      setLoadCoupons(dummyData.coupons);
    }

    return () => {
      clearTimeout(loadAssets);
    };
  }, [favourites]);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    //retrieve the popular item
    let setSelectedPopularItems = dummyData.menu.find(
      (a) => a.name == "Popular"
    );
    //set poular menu
    setPopularFood(
      setSelectedPopularItems?.list.filter((a) =>
        a.categories.includes(categoryId)
      )
    );
    //retrieve the recommended meny
    let selectedRecommended = dummyData.menu.find(
      (a) => a.name == "Recommended"
    );
    //set  recommended meny based on catego. id
    setRecommend(
      selectedRecommended?.list.filter((a) => a.categories.includes(categoryId))
    );
    //find menu
    let selectedMenu = dummyData.menu.find((item) => item.id == menuTypeId);
    //set menu
    setMenuList(
      selectedMenu.list.filter((a) => a.categories.includes(categoryId))
    );
  };
  function renderDeliveryAddress() {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}
      >
        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Delivery To:</Text>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
            {dummyData?.myProfile?.address}
          </Text>
          <Image
            source={icons.down_arrow}
            style={{
              width: 20,
              height: 20,
              marginTop: 1,
              marginLeft: SIZES.base,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderFoodCategorySection() {
    return (
      <FlatList
        horizontal
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedMenuType == item.id
                  ? COLORS.primary
                  : COLORS.lightGray2,
              height: 55,
              width: 120,
              marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
            }}
          >
            {/* category image */}
            <Image
              source={item.icon}
              style={{ marginTop: 5, height: 50, width: 50 }}
            />
            {/* category name */}
            <Text
              style={{
                alignSelf: "center",
                marginRight: SIZES.base,
                color:
                  selectedCatergoryId == item.id
                    ? COLORS.white
                    : COLORS.darkGray,
                ...FONTS.h4,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderPopularSection() {
    return (
      <Section
        title={"Popular near you"}
        onPress={() => console.log("Popular near me")}
      >
        <FlatList
          data={popularFood}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommend.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: "center",
              }}
              item={item}
              isFavourite={favourites?.indexOf(item) >= 0}
              onPress={() =>
                navigation.navigate("FoodDetail", { foodDetail: item })
              }
            />
          )}
        />
      </Section>
    );
  }
  function renderRecommendedSection() {
    return (
      <Section title={"Recommended"} onPress={() => console.log("showAll")}>
        <FlatList
          data={recommend}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommend.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: "center",
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() =>
                navigation.navigate("FoodDetail", { foodDetail: item })
              }
            />
          )}
        />
      </Section>
    );
  }
  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCatergoryId, item.id);
            }}
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
          >
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Icon */}
        <Image
          source={icons.search}
          style={{ marginLeft: SIZES.padding, height: 20, width: 20 }}
        />
        {/* Text Input */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.h3,
          }}
          placeholder="Search Food.."
        />
        {/* Filter Button */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            style={{
              marginRight: SIZES.radius,
              height: 20,
              width: 20,
              tintColor: COLORS.black,
            }}
            source={icons.filter}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search */}
      {renderSearch()}
      {/* Filter Modal */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Delivery  Address  */}
            {renderDeliveryAddress()}
            {/* Food Category Section */}
            {renderFoodCategorySection()}
            {/* Popular Section */}
            {renderPopularSection()}
            {/* Recommended Items */}
            {renderRecommendedSection()}
            {/* Menu Type */}
            {renderMenuTypes()}
          </View>
        }
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
                marginHorizontal: SIZES.radius,
                borderRadius: SIZES.padding,
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
    products: state.productReducer.products,
    favourites: state.favouriteReducer.favourites,
    coupons: state.couponReducer.coupons,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setProducts: (products) => {
      return dispatch(setProducts(products));
    },
    setLoadCoupons: (coupons) => {
      return dispatch(setLoadCoupons(coupons));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
