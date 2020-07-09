import React from "react";
import { View, Text, FlatList, TouchableOpacity, Dimensions } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import accountData from "./AccountScreenData";

function renderItem({ item }) {
  return (
    <TouchableOpacity style={styles.itemStyle}>
      <Text style={styles.headerText}>{item.header}</Text>
      <Text style={styles.descText}>{item.desc}</Text>
      <Text style={styles.contentText}>{item.content}</Text>
    </TouchableOpacity>
  );
}

export default function AccountScreenInfoList() {
  return (
    <View style={{marginTop : 150/ 736 * Dimensions.get("screen").height}}>
      <Text style={styles.headerStyle}>Info</Text>
      <FlatList
        data={accountData}
        renderItem={renderItem}
        style={{paddingBottom: 5 }}
      />
    </View>
  );
}
