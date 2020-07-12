import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import accountData from "../Components/AccountScreenData";
import styles from "./Styles/AccountScreenInfoListStyle";

function renderItems({ item }) {
  console.log("URIII", item.uri);
  return (
    <TouchableOpacity style={{ backgroundColor: "blue" }}>
      <Image source={item.uri} style={styles.imageStyle} />
    </TouchableOpacity>
  );
}

export default function AccountScreenInfoList() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={accountData}
        renderItem={renderItems}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
