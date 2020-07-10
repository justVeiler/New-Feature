import React, { useReducer } from "react";
import AppProvider from "./AppProvider";

const ContextProviderComposer = ({ contextProviders, children }) => {
  return contextProviders.reduceRight(
    (children, parent, index) => React.cloneElement(parent, { children }),
    children
  );
};

export default function Provider(props) {
  return (
    <ContextProviderComposer
      contextProviders={[<AppProvider key={"image"} />]}
      children={props.children}
    />
  );
}
