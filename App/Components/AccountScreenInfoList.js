import React, {useContext, useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/AccountScreenInfoListStyle";
import { AppContext } from "../Providers/AppProvider";

export default function AccountScreenInfoList() {
  const appContext = useContext(AppContext);
  const { images } = appContext.state;
  const [date, Setdate] = useState('');

  useEffect()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image source={{ uri: item }} style={styles.imageStyle} />
      </TouchableOpacity>
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
