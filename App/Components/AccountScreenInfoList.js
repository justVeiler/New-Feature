import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import accountData from "./AccountScreenData";

export default function AccountScreenInfoList(props) {
  const { params } = props;
  const { uri } = params;
  console.log("PROPS", params);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={accountData}
        renderItem={renderItem}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
function renderItem({ props }) {
  const { params } = props;
  return (
    <TouchableOpacity style={styles.itemStyle}>
      <Image source={params} style={{ width: 200, height: 200 }} />
    </TouchableOpacity>
  );
}
