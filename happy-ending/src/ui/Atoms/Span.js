import React from "react";

function Span({ text, children }) {
  // TODO: create style code
  // const style = ;
  return (
    <span
    // style = {style}
    >
      {text}
      {children}
    </span>
  );
}

Span.defaultProps = {
  text: "",
};

export default Span;
