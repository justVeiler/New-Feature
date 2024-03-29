import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./Styles/HomeScreenNewsStyle";
import newsData from "./HomeScreenNewsData";

function renderItem({ item }) {
  return (
    <TouchableOpacity style={styles.itemStyle}>
      <Text style={styles.headerText}>{item.header}</Text>
      <Text style={styles.descText}>{item.desc}</Text>
      <Text style={styles.contentText}>{item.content}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreenNews() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>News</Text>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
