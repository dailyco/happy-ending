import React from "react";

function LoadingTemplate({ video }) {
  return (
    <>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default LoadingTemplate;
