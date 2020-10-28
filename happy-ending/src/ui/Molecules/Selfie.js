import React from "react";
import Img from "../Atoms/Img";
import classNames from "classnames";

function Selfie() {
  return (
    <div className={classNames("Selfie")}>
      <Img></Img>
      <Img></Img>
      <Img></Img>
    </div>
  );
}

export default Selfie;
