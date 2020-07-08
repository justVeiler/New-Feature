import React from "react";
import { ReactNode } from "react";

import RootProvider from "./RootContainer";
import AppNavigation from "../Navigation/AppNavigation";
import BottomNavigation from "../Navigation/BottomNavigation";

const App = () => {
  return (
    <RootProvider>
      <AppNavigation />
    </RootProvider>
  );
};

export default App;
