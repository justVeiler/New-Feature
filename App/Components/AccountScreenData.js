import AsyncStorage from "@react-native-community/async-storage";

const accountData = [
  {
    key: "pic1",
    header: "Pic",
    desc: "VnExpress",
    uri: AsyncStorage.getItem("uri").then(uri => console.log(uri))
  }
];

export default accountData;
