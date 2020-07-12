import AsyncStorage from "@react-native-community/async-storage";

const getUri = async () => {
  await AsyncStorage.getItem("uri").then(uri => console.log(uri));
};

const accountData = [
  {
    key: "pic1",
    header: "Pic",
    desc: "VnExpress",
    uri: uri
  }
];

export default accountData;
