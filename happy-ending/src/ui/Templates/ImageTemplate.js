import React from "react";
import Img from "../Atoms/Img";

function ImageTemplate({ url }) {
  return (
    <div>
      <Img url={url}></Img>
    </div>
  );
}

export default ImageTemplate;
