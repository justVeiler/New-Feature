import React from "react";
import { ScrollView } from "react-native";
import AccountScreenInfoList from "../Components/AccountScreenInfoList";
import AccountScreenHeader from "../Components/AccountScreenHeader";

export default function AccountScreen(props) {
  const { route } = props;
  const { params } = route;
  // const {uri} = params;
  console.log('bbb', params)
  return (
    <ScrollView style={{ flex: 1 }}>
      <AccountScreenHeader />
      <AccountScreenInfoList params={params}/>
    </ScrollView>
  );
}
