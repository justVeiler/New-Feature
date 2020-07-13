import { AppContext } from "../Providers/AppProvider";
import { useContext } from "react";

function accountData() {
  const appContext = useContext(AppContext);
  const data = appContext.state;
  console.log("TADA", uri);
  return [
    {
      key: "key1",
      uri: data.data
    }
  ];
}

export default accountData;
