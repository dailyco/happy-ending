import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P27Video from "../../assets/video/27-last page.mp4";

import "../../scss/Pages/P27.scss";

function P27() {
  return (
    <div className={classNames("P27")}>
      <VideoTemplate video={P27Video}></VideoTemplate>
    </div>
  );
}

export default P27;
