import React from "react";
import P from "../Atoms/P";
import Webcam from "react-webcam";
import Button from "../Atoms/Button";
import "../../scss/Templates/SeparatedTemplate16_1.scss";

function SeparatedTemplate16_1({ data, styleName }) {
  const { p_data } = data;
  const { p_style, btn_style } = styleName;

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

  return (
    <div className={SeparatedTemplate16_1}>
      <P styleName={p_style}>{p_data.text}</P>
      <Webcam audio={false} videoConstraints={videoConstraints}></Webcam>
      <Button styleName={btn_style} onClick={capture}></Button>
    </div>
  );
}

export default SeparatedTemplate16_1;
