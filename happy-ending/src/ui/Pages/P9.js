import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P9Video from "../../assets/videos/9-D-4.mp4";

import "../../scss/pages.scss";

function P9() {
  return (
    <div className={classNames("Page", "P9", "bg-video")}>
      <VideoTemplate video={P9Video}></VideoTemplate>
    </div>
  );
}

export default P9;
