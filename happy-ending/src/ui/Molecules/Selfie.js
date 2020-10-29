import React from "react";
import Img from "../Atoms/Img";
import classNames from "classnames";
import cover_outside from "../../assets/images/29p_images/29 ebook-p0.png";
import cover_inside from "../../assets/images/29p_images/29 ebook-p0 inside.png";

function Selfie({ data, styleName }) {
  return (
    <div className={classNames("Selfie")}>
      <Img image={cover_outside} alt="cover-outside"></Img>
      <Img image={cover_inside} alt="cover-inside"></Img>
      <Img image={data} alt="selfie"></Img>
    </div>
  );
}

export default Selfie;
