import React from "react";

function VideoTemplate({ video, to }) {
  return (
    <>
      <video autoPlay muted onEnded={to}>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default VideoTemplate;
