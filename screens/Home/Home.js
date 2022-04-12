import { View, Text, Image } from "react-native";
import { useState } from "react";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useEffect } from "react";

const Home = () => {
  const [selectedCatergoryId, setSelectedCatergoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCatergoryId, selectedMenuType);
  }, []);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    //find menu
    let selectedMenu = dummyData.menu.find((item) => item.id == menuTypeId);
    //set menu
    setMenuList(
      selectedMenu.list.filter((a) => a.categories.includes(categoryId))
    );
  };

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
        <TouchableOpacity onPress={() => ""}>
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
      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default Home;
