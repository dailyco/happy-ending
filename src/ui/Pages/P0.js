import React from "react";
import classNames from "classnames";
import LoadingTemplate from "../Templates/LoadingTemplate";
import P0Video from "../../assets/videos/0_Loadingpage.mp4";

import "../../scss/pages.scss";

function P0({ history }) {
  const onEnded = () => {
    history.push("/p29");
  };

  return (
    <div className={classNames("Page", "P0", "bg-video", "fade-in")}>
      <LoadingTemplate video={P0Video} onEnded={onEnded}></LoadingTemplate>
    </div>
  );
}

export default P0;
