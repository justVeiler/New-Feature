import React, { useContext } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import AccountScreenHeader from "../Components/AccountScreenHeader";
import { AppContext } from "../Providers/AppProvider";
import styles from "../Components/Styles/AccountScreenInfoListStyle";
import Date from "./DateNowScreen";

export default function AccountScreen() {
  const appContext = useContext(AppContext);
  const { images } = appContext.state;
  console.log("DATA", images);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Date />
        <TouchableOpacity style={styles.imageStyle}>
          <Image source={{ uri: item }} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={<AccountScreenHeader />}
      data={images}
      renderItem={renderItem}
    />
  );
}
