import React from "react";

function LoadingTemplate({ video, onEnded }) {
  return (
    <>
      <video autoPlay muted onEnded={onEnded}>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default LoadingTemplate;
