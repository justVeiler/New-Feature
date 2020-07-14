import React, { useContext } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import AccountScreenHeader from "../Components/AccountScreenHeader";
import { AppContext } from "../Providers/AppProvider";
import styles from "../Components/Styles/AccountScreenInfoListStyle";

export default function AccountScreen() {
  const appContext = useContext(AppContext);
  const { images } = appContext.state;
  console.log("DATA", images);

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "column" }}>
        <Text style={{ marginLeft: 16, fontSize: 20 }}>Date</Text>
        <TouchableOpacity style={{ padding: 5 }}>
          <Image source={{ uri: item }} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      style={{ flex: 1 }}
      ListHeaderComponent={<AccountScreenHeader />}
      data={images}
      renderItem={renderItem}>
    </FlatList>
  );
}
