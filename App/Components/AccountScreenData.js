import { AppContext } from "../Providers/AppProvider";
import {useContext, useEffect, useState} from 'react';

function accountData() {
  const appContext = useContext(AppContext);
  const data = appContext.state;

  const array = [
    {
      key: "key1",
      uri: data.data,
    }
  ];
  console.log("ARRAY", array);
  return array.concat(data.data);
}

export default accountData;
