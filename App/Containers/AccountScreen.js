import React from "react";
import { View } from "react-native";
import HomeScreenNews from "../Components/HomeScreenNews";
import AccountScreenHeader from "../Components/AccountScreenHeader";

export default function AccountScreen() {
  return (
    <View style={{flex: 1, flexDirection : "column"}}>
      <AccountScreenHeader />
      <HomeScreenNews />
    </View>
  );
}
