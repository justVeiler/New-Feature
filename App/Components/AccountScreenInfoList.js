import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import { AppContext } from "../Providers/AppProvider";

export default function AccountScreenInfoList() {
  const appContext = useContext(AppContext);
  const { images } = appContext.state;
  console.log("DATA", images);

  const renderItem = ({ item }) => {
    console.log("ITEM:", item);
    return (
      <TouchableOpacity>
        <Image source={{ uri: item }} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  };

  // const keyExtractor = (item, index) => {
  //   item.id.toString();
  // };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        style={{ marginTop: 5 }}
        // keyExtractor={keyExtractor}
      />
    </View>
  );
}
