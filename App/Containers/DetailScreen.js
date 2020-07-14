import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import styles from "../Components/Styles/HomeScreenNewsStyle";
import DetailScreenGobackButton from "../Components/DetailScreenGobackButton";

export default function DetailScreen(props) {
  const { route } = props;
  const { params } = route;
  return (
    <View style={{ backgroundColor: "white", flex : 1 }}>
      <SafeAreaView style={styles.container}>
        <DetailScreenGobackButton />
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
      </SafeAreaView>
    </View>
  );
}
