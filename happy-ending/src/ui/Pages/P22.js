import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P22Video from "../../assets/video/22-D-1.mp4";

import "../../scss/Pages/P22.scss";

function P22() {
  return (
    <div className={classNames("P22")}>
      <VideoTemplate video={P22Video}></VideoTemplate>
    </div>
  );
}

export default P22;