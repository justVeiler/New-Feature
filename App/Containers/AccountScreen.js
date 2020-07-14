import React, { useContext } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";
import AccountScreenHeader from "../Components/AccountScreenHeader";
import { AppContext } from "../Providers/AppProvider";
import styles from "../Components/Styles/AccountScreenInfoListStyle";
import DateNowScreen from "./DateNowScreen";
import { navigate } from "../Navigation/RootNavigation";

export default function AccountScreen() {
  const appContext = useContext(AppContext);
  const { images } = appContext.state;
  console.log("DATA", images);

  const renderItem = ({ item }) => {
    return (
      <View>
        <DateNowScreen />
        <Text>{item.date}</Text>
        <TouchableOpacity
          style={styles.imageStyle}
          onPress={() => navigate("ShowImageScreen", { item: item })}>
          <Image source={{ uri: item }} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<AccountScreenHeader />}
        data={images}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
