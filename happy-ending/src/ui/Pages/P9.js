import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P9Video from "../../assets/videos/9-D-4.mp4";

import "../../scss/Pages/P9.scss";

function P9() {
  return (
    <div className={classNames("P9")}>
      <VideoTemplate video={P9Video}></VideoTemplate>
    </div>
  );
}

export default P9;
