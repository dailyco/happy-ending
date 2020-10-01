import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P15Video from "../../assets/video/15-D-3.mp4";

import "../../scss/Pages/P15.scss";

function P15() {
  return (
    <div className={classNames("P15")}>
      <VideoTemplate video={P15Video}></VideoTemplate>
    </div>
  );
}

export default P15;
