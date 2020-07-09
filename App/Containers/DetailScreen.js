import React from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import newsData from "../Components/HomeScreenNewsData";
import styles from "../Components/Styles/HomeScreenNewsStyle";

export default function DetailScreen(props) {
  const { route } = props;
  const { params } = route;
  console.log("PAAAAA", params);
  return (
    <View style={{ flex: 1, marginLeft: 16, marginRight: 16, marginTop: 40 }}>
      <FlatList
        data={[params]}
        renderItem={() => (
          <View>
            <Text style={styles.headerText}>{params.item.header}</Text>
            <Text style={styles.descText}>{params.item.desc}</Text>
            <Text style={styles.contentText}>{params.item.content}</Text>
          </View>
        )}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
