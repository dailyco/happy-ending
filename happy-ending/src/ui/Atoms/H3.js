import React from "react";
import "../../scss/Atoms/H3.scss";

function H3({ text, color, pos }) {
  return <h3 className={`Buttons ${color} ${pos}`}>{text}</h3>;
}

H3.defaultProps = {
  text: "",
  color: "black",
  pos: "center",
};

export default H3;
