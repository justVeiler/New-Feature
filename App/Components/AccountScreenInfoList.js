import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import accountData from "../Components/AccountScreenData";
import styles from "./Styles/AccountScreenInfoListStyle";

function renderItems({ }) {
  return (
    <TouchableOpacity style={{ backgroundColor: "blue" }}>
      <Image source={{}} style={styles.imageStyle} />
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
