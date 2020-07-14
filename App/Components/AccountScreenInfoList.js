import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import { AppContext } from "../Providers/AppProvider";

export default function AccountScreenInfoList() {
  const appContext = useContext(AppContext);
  const { images } = appContext.state;
  console.log("DATA", images);

  const renderItem = ({ item }) => {
    // console.log("ITEM:", item);
    return (
      <View style={{flexDirection: "column"}}>
          <Text style={{marginLeft: 16, fontSize : 20}}>Date</Text>
        <TouchableOpacity style={{ padding: 5}}>
          <Image source={{ uri: item }} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
