import React from "react";
import Img from "../Atoms/Img";
import Selfie from "../Molecules/Selfie";
import classNames from "classnames";

function Decorations() {
  return (
    <div className={classNames("Decorations")}>
      <Selfie></Selfie>
      <Img></Img>
      <Img></Img>
      <Img></Img>
    </div>
  );
}

export default Decorations;
