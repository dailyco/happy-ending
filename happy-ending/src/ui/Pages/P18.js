import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P18Video from "../../assets/video/18-D-2.mp4";

import "../../scss/Pages/P18.scss";

function P18() {
  return (
    <div className={classNames("P18")}>
      <VideoTemplate video={P18Video}></VideoTemplate>
    </div>
  );
}

export default P18;
