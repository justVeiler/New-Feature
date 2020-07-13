import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import { AppContext } from "../Providers/AppProvider";

export default function AccountScreenInfoList() {
  const appContext = useContext(AppContext);
  const data = appContext.state.data;
  const imageList = [
    {
      key: "1",
      uri: data
    }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Image source={item.uri} style={styles.imageStyle} />
      <Image source={item.uri} style={styles.imageStyle} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
