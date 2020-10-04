import React from "react";
import P from "../Atoms/P";
import Img from "../Atoms/Img";
import Webcam from "react-webcam";
import Button from "../Atoms/Button";
import { Link } from "react-router-dom";

import "../../scss/Templates/SeparatedTemplate16_1.scss";

function SeparatedTemplate16_1({ data, styleName }) {
  const { p_data } = data;
  const { p_style, btn_style, retake_btn_style, check_btn_style } = styleName;

  const videoConstraints = {
    width: { min: 496 },
    height: { min: 716 },
    aspectRatio: 0.41340782122,
  };

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const captureAfter3Sec = React.useCallback(() => {
    window.setTimeout(capture, 3000);
  }, [capture]);

  const retake = React.useCallback(() => {
    setImgSrc(null);
  }, [setImgSrc]);

  return (
    <div className={"SeparatedTemplate16_1"}>
      {!imgSrc && (
        <>
          <P styleName={p_style}>{p_data.text}</P>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}></Webcam>
          <Button className={"capture"} styleName={btn_style} onClick={captureAfter3Sec}></Button>
        </>
      )}
      {imgSrc && (
        <>
          <Img image={imgSrc} alt="영정 사진" />
          <Button className={"retake"} styleName={retake_btn_style} onClick={retake}>
            다시찍기
          </Button>
          <Link to={"/p17"}>
            <Button styleName={check_btn_style}>확인</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default SeparatedTemplate16_1;
