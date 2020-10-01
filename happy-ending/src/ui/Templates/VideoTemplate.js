import React from "react";

function VideoTemplate({ video }) {
  return (
    <>
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default VideoTemplate;
