import React, { useEffect, useContext } from "react";
import { FlatList, Text, TouchableOpacity, Dimensions } from "react-native";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import { AppContext } from "../Providers/AppProvider";
import styles from "../Components/Styles/HomeScreenNewsStyle";
import { navigate } from "../Navigation/RootNavigation";
import newsData from "../Components/HomeScreenNewsData";

export default function HomeScreen() {
  const { loadSavedImages } = useContext(AppContext);

  useEffect(() => {
    try {
      (async function() {
        console.log("LOAD");
        await loadSavedImages();
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemStyle}
        onPress={() => navigate("DetailScreen", { item: item })}>
        <Text style={styles.headerText}>{item.header}</Text>
        <Text style={styles.descText}>{item.desc}</Text>
        <Text style={styles.contentText}>{item.content}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.flatListStyle}
      data={newsData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HomeScreenHeader />}
      ListHeaderComponentStyle={styles.headerComponentStyle}
    />
  );
}
