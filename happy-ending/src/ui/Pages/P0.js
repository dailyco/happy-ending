import React from "react";
import classNames from "classnames";
import LoadingTemplate from "../Templates/LoadingTemplate";
import P0Video from "../../assets/videos/0_Loadingpage.mp4";

import "../../scss/pages.scss";

function P0() {

  return (
    <div className={classNames("Page", "P0", "bg-video")}>
      <LoadingTemplate video={P0Video}></LoadingTemplate>
    </div>
  );
}

export default P0;
