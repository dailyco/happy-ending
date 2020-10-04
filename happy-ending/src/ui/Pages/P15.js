import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P15Video from "../../assets/videos/15-D-3.mp4";

import "../../scss/pages.scss";

function P15() {
  return (
    <div className={classNames("Page", "P15", "bg-video")}>
      <VideoTemplate video={P15Video}></VideoTemplate>
    </div>
  );
}

export default P15;
