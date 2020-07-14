import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";

export default function DateNowScreen() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    setDate([date + "/" + month + "/" + year]);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: 16,
        marginTop: 16
      }}>
      <Text
        style={{
          fontSize: 20
        }}>
        {date}
      </Text>
    </View>
  );
}
