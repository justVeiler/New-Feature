import React, { useReducer } from "react";

const ContextProviderComposer = ({ contextProviders, children }) => {
  return contextProviders.reduceRight(
    (children, parent, index) => React.cloneElement(parent, { children }),
    children
  );
};

export default function Provider(props) {
  return (
    <ContextProviderComposer contextProviders={[]} children={props.children} />
  );
}
