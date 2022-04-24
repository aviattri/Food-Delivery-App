import { View, Text } from "react-native";
import React from "react";
import { COLORS, icons, images, SIZES } from "../../constants";
import {
  FormInput,
  Header,
  IconButton,
  TextButton,
  VerticalFormInput,
} from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [IDCard, setIDCard] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(name);
  function renderHeader() {
    return (
      <Header
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.width * 0.15,
          marginBottom: SIZES.radius,
        }}
        title="MY ACCOUNT"
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
        rightComponent={
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
            icon={images.profile}
            iconStyle={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: COLORS.gray,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.navigate("Home")}
          />
        }
      />
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}

      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.lightGray2,
          marginHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
        }}
      >
        <VerticalFormInput
          label={"Name"}
          onChange={(value) => setName(value)}
        />
        <VerticalFormInput
          label={"Phone Number"}
          onChange={(value) => setPhoneNumber(value)}
        />
        <VerticalFormInput
          label={"ID Card"}
          onChange={(value) => setIDCard(value)}
        />
        <VerticalFormInput
          label={"Date Of Birth"}
          onChange={(value) => setName(value)}
          placeholder={"DD/MM/YY"}
          icon={"calendar"}
          onPress={() => console.log("")}
        />
        <VerticalFormInput
          label={"Gender"}
          onChange={(value) => setName(value)}
          icon={"chevron-thin-down"}
          onPress={() => setOpen()}
          open={open}
        />
        <VerticalFormInput
          label={"Email"}
          onChange={(value) => setEmail(value)}
        />
        <VerticalFormInput
          label={"Address"}
          onChange={(value) => setAddress(value)}
          containerStyle={{ marginBottom: SIZES.radius * 1.5 }}
        />
      </View>
      <TextButton
        disabled={disable}
        buttonContainerStyle={{
          borderRadius: SIZES.radius,
          marginVertical: SIZES.radius,
          marginHorizontal: SIZES.padding,
          backgroundColor: disable ? COLORS.gray : COLORS.primary,
          height: 60,
        }}
        label={"Save"}
        onPress={() =>
          console.log({
            name: name,
            phoneNumber: phoneNumber,
            IDCard: IDCard,
            DOB: DOB,
            gender: gender,
            email: email,
            address: address,
          })
        }
      />
    </View>
  );
};

export default EditProfile;
