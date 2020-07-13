import { AppContext } from "../Providers/AppProvider";
import { useContext } from "react";

function accountData() {
  const appContext = useContext(AppContext);
  const data = appContext.state;
  console.log("TADA", data.data);
  const array = [
    {
      key: "key1",
      uri: data.data
    }
  ];
  return array.push(data.data);
}

export default accountData;
