import React from "react";
import "../../scss/Atoms/Button.scss";

function Button({ text, size, color }) {
  return <button className={`Button ${size} ${color}`}>{text}</button>;
}

Button.defaultProps = {
  text: "",
};

export default Button;
