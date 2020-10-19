import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P27Video from "../../assets/videos/27-last page.mp4";

import "../../scss/pages.scss";

function P27({ history }) {
  const goTo = () => {
    history.push("/p0");
  };

  return (
    <div className={classNames("Page", "P27", "bg-video")}>
      <VideoTemplate video={P27Video} to={goTo}></VideoTemplate>
    </div>
  );
}

export default P27;
