import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P22Video from "../../assets/videos/22-D-1.mp4";

import "../../scss/pages.scss";

function P22({ history }) {
  const goTo = () => {
    history.push("/p23");
  };
  return (
    <div className={classNames("Page", "P22", "bg-video")}>
      <VideoTemplate video={P22Video} to={goTo}></VideoTemplate>
    </div>
  );
}

export default P22;
