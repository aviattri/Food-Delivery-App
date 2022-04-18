import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import React from "react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import {
  Header,
  IconButton,
  LineDivider,
  TextButton,
  TextIconButton,
} from "../../components";
import { LinearGradient } from "expo-linear-gradient";

const Map = ({ navigation }) => {
  const mapRef = useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(null);

  useEffect(() => {
    let initialRegion = {
      latitude: -33.88448,
      longitude: 151.19734,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };
    setRegion(initialRegion);
    let destination = {
      latitude: -33.88448,
      longitude: 151.19734,
    };
    setToLoc(destination);
    setFromLoc({ latitude: -31.88448, longitude: 151.29734 });
  }, []);

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          position: "absolute",
          top: 25,
          left: 20,
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title="STATUS"
        leftComponent={
          <IconButton
            containerStyle={{
              ...styles.buttonStyles,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }
  function renderInfo() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <View>
          {/* Shadow */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.lightGray1]}
            style={{
              position: "absolute",
              top: -15,
              left: 0,
              right: 0,
              height: Platform.OS === "ios" ? 200 : 50,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
          {/* Details */}
          <View
            style={{
              padding: SIZES.padding,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: COLORS.white,
            }}
          >
            {/* Delivery Time */}
            <View
              style={{
                marginTop: SIZES.radius,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Image source={icons.clock} style={{ height: 40, width: 40 }} />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: SIZES.padding,
                }}
              >
                <Text style={{ ...FONTS.body4 }}>Your Delivery Time</Text>
                <Text style={{ ...FONTS.h3 }}>30 Mins</Text>
              </View>
            </View>

            {/* Delivery Address */}
            <View
              style={{
                marginTop: SIZES.padding,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={icons.location1}
                style={{ height: 40, width: 40 }}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: SIZES.padding,
                }}
              >
                <Text style={{ ...FONTS.body4 }}>Your Address</Text>
                <Text style={{ ...FONTS.h3 }}>
                  29 Myrtle Street Chippendale
                </Text>
              </View>
            </View>
            {/* Delivery Address */}
            <TouchableOpacity
              style={{
                marginVertical: SIZES.padding,
                flexDirection: "row",
                height: 70,
                alignItems: "center",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={images.profile}
                style={{
                  margin: SIZES.radius,
                  width: 50,
                  height: 50,
                  borderRadius: SIZES.radius,
                }}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: SIZES.padding,
                }}
              >
                <Text style={{ ...FONTS.h3 }}>Gobe Durant</Text>
                <Text style={{ ...FONTS.body4 }}>Delivery Drive</Text>
              </View>
              <Image
                source={icons.call}
                style={{
                  marginLeft: SIZES.padding * 3,
                  width: 50,
                  height: 50,
                  borderRadius: SIZES.radius,
                  borderColor: COLORS.white2,
                  borderWidth: 1,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <MapView ref={mapRef} initialRegion={region} style={{ flex: 1 }}>
        {fromLoc && (
          <Marker
            key={"fromLoc"}
            coordinate={fromLoc}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
        {toLoc && (
          <Marker
            key={"toLoc"}
            coordinate={toLoc}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
      </MapView>
      {renderHeader()}
      {renderInfo()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonStyles: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.black,
    borderWidth: 1,
    backgroundColor: COLORS.white2,
  },
});

export default Map;
