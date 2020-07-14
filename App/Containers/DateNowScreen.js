import React, { useState, useEffect } from "react";

import { View, Text } from "react-native";

export default function Date() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    try {
      (async function() {
        await setTime(time === date + "/" + month + "/" + year);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: 10
      }}>
      <Text
        style={{
          fontSize: 20,
          marginTop: 16
        }}>
        {time}
      </Text>
    </View>
  );
}
