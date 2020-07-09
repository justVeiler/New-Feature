import React from "react";
import { View } from "react-native";
import AccountScreenInfoList from "../Components/AccountScreenInfoList";
import AccountScreenHeader from "../Components/AccountScreenHeader";

export default function AccountScreen() {
  return (
    <View style={{ flex: 1 }}>
      <AccountScreenHeader />
      <AccountScreenInfoList />
    </View>
  );
}
