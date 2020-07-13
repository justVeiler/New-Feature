import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import accountData from "../Components/AccountScreenData";
import styles from "./Styles/AccountScreenInfoListStyle";
import { AppContext } from "../Providers/AppProvider";

export default function AccountScreenInfoList() {
  const appContext = useContext(AppContext);
  const data = appContext.state;
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerStyle}>History</Text>
      <FlatList
        data={[accountData]}
        renderItem={() => (
          <TouchableOpacity>
            <Image source={{ uri: data.data }} style={styles.imageStyle} />
            <Image source={{ uri: data.data }} style={styles.imageStyle} />
          </TouchableOpacity>
        )}
        style={{ marginTop: 5 }}
      />
    </View>
  );
}
