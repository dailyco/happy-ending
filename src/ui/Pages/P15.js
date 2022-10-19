import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P15Video from "../../assets/videos/15-D-3.mp4";

import "../../scss/pages.scss";

function P15() {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/p16");
  };

  return (
    <div className={classNames("Page", "P15", "bg-video")}>
      <VideoTemplate video={P15Video} to={goTo}></VideoTemplate>
    </div>
  );
}

export default P15;
