import { Alert } from "react-native";

const disabledAlert = () =>
  Alert.alert("Note", "This feature is disabled in development", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

export default disabledAlert;
