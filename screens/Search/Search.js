import { View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import FilterModal from "../Home/FilterModal";
import { useState } from "react";

const Search = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 10,
          height: 70,
          width: "100%",
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
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding,
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
    </View>
  );
};

export default Search;
