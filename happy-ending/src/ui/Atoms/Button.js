import React from "react";

function Button(text, /*width, height, textColor, backgoundColor, transparency,*/ { children }) {
  // TODO: create style code
  // const style = ;
  return (
    <button
    // style = {style}
    >
      ${text}
      {children}
    </button>
  );
}

Button.defaultProps = {
  text = "",
};

export default Button;
