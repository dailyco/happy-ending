import React from "react";

function P({ text, /*width, font_size, color,*/ children }) {
  // TODO: create style code
  // const style = ;
  return (
    <p
    // style = {style}
    >
      {text}
      {children}
    </p>
  );
}

P.defaultProps = {
  text: "",
};

export default P;
