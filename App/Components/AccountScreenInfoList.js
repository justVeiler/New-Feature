import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
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
    <View style={{flex: 1}}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={accountData}
        renderItem={renderItem}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
