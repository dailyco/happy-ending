import React from "react";

function Span({ text, children }) {
  // TODO: create style code
  // const style = ;
  return (
    <p
    // style = {style}
    >
      ${text}
      {children}
    </p>
  );
}

Span.defaultProps = {
  text = "",
};

export default Span;
