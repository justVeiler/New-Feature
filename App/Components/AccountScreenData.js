import { AppContext } from "../Providers/AppProvider";
import { useContext } from "react";

function accountData() {
  const appContext = useContext(AppContext);
  const {uri} = appContext.state;
  console.log("URI", uri);
  return console.log("COME HERE")[
    {
      key: "key1",
      uri: uri
    }
  ];
}

export default accountData;
