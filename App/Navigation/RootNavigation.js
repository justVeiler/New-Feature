import * as React from "react";

export const navigationRef = React.createRef();
console.disableYellowBox = true;
export function navigate(name, params = {}) {
  navigationRef.current?.navigate(name, params);
}
