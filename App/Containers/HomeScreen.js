import React, { useEffect, useContext } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ImageBackground
} from "react-native";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import { AppContext } from "../Providers/AppProvider";
import styles from "../Components/Styles/HomeScreenNewsStyle";
import { navigate } from "../Navigation/RootNavigation";
import newsData from "../Components/HomeScreenNewsData";
import images from "../Images/images";

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
      <View>
        <TouchableOpacity
          style={styles.itemStyle}
          onPress={() => navigate("DetailScreen", { item: item })}>
          <Text style={styles.headerText}>{item.header}</Text>
          <Text style={styles.descText}>{item.desc}</Text>
          <Text style={styles.contentText}>{item.content}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <ImageBackground
        source={images.background}
        style={styles.backgroundImage}
      />
      <SafeAreaView>
        <FlatList
          style={styles.flatListStyle}
          data={newsData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeScreenHeader />}
          ListHeaderComponentStyle={styles.headerComponentStyle}
          automaticallyAdjustContentInsets={false}
        />
      </SafeAreaView>
    </View>
  );
}
