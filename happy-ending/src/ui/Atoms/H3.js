import React from "react";
import "../../scss/Atoms/H3.scss";

function H3({ text, color }) {
  return <h3 className={`H3 ${color}`}>{text}</h3>;
}

H3.defaultProps = {
  text: "",
  color: "black",
  pos: "center",
};

export default H3;
