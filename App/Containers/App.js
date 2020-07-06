import React from "react";

import RootProvider from "./RootContainer";
import AppNavigation from "../Navigation/AppNavigation";

const App = () => {
  return (
    <RootProvider>
      <AppNavigation />
    </RootProvider>
  );
};

export default App;
