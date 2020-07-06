import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

const newsData = [
    {
        key: "news1",
        header : "Wololo",
        desc : "Ahiho",
        content : "This is News"
    },
    {
        key: "news2",
        header : "Wololo",
        desc : "Ahiho",
        content : "This is News"
    },
    {
        key: "news3",
        header : "Wololo",
        desc : "Ahiho",
        content : "This is News"
    },{
        key: "news4",
        header : "Wololo",
        desc : "Ahiho",
        content : "This is News"
    }
]

function renderItem() {
    return (
        <TouchableOpacity/>
    )

}
