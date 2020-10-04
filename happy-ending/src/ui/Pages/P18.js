import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P18Video from "../../assets/videos/18-D-2.mp4";

import "../../scss/pages.scss";

function P18() {
  return (
    <div className={classNames("Page", "P18", "bg-video")}>
      <VideoTemplate video={P18Video}></VideoTemplate>
    </div>
  );
}

export default P18;
