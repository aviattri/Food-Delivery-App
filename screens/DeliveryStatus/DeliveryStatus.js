import { View, Text, Image } from "react-native";
import React from "react";
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from "../../constants";
import {
  Header,
  IconButton,
  LineDivider,
  TextButton,
  TextIconButton,
} from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const DeliveryStatus = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(2);
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="DELIVERY STATUS"
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
  function renderInfo() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: SIZES.padding * 2,
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
          Estimated Delivery Time
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            color: COLORS.black,
            ...FONTS.h2,
          }}
        >
          18th Apr 2022 / 2:20 PM
        </Text>
      </View>
    );
  }
  function renderTrackOrder() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          alignItems: "center",
          paddingVertical: SIZES.padding,
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Track Order */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.padding,
            marginBottom: 20,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Track Order</Text>
          <Text
            style={{
              marginLeft: SIZES.padding * 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            NYBOVC12
          </Text>
        </View>
        <LineDivider lineStyle={{ backgrounColor: COLORS.black }} />
        {/* Steps */}
        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`OrderStatus-${index}`}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: -5,
                  }}
                >
                  <Image
                    source={icons.check_circle}
                    style={{
                      height: 40,
                      width: 40,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />
                  <View
                    style={{
                      paddingLeft: SIZES.padding,
                    }}
                  >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>
                      {item.sub_title}
                    </Text>
                  </View>
                </View>
                {index < constants.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep && (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      />
                    )}
                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{
                          height: 50,
                          width: 4,
                          marginLeft: 17,
                        }}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
  function renderFooter() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginBottom: SIZES.padding,
        }}
      >
        {currentStep < constants.track_order_status.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              height: 55,
            }}
          >
            {/* cancel Button */}
            <TextButton
              label={`Cancel`}
              labelStyle={{
                color: COLORS.primary,
                ...FONTS.h3,
              }}
              buttonContainerStyle={{
                width: "40%",
                paddingHorizontal: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
              }}
              onPress={() => {
                //dispatch
                navigation.navigate("Home");
              }}
              disabled={false}
            />
            {/* Map View Button */}
            <TextIconButton
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              label={"Map View"}
              labelStyle={{
                paddingLeft: SIZES.radius,
                paddingRight: SIZES.padding,
              }}
              icon={icons.map}
              iconPosition={"LEFT"}
              iconStyle={{
                marginLeft: SIZES.padding,
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
              onPress={() => {
                //dispatch
                navigation.navigate("MapView");
              }}
            />
          </View>
        )}
        {currentStep == constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={{ height: 55, borderRadius: SIZES.base }}
            label="DONE"
            onPress={() => navigation.navigate("Home")}
          />
        )}
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
      {/* Info */}
      {renderInfo()}
      {/* Track Order */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default DeliveryStatus;
