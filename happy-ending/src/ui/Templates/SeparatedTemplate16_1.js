import React from "react";
import P from "../Atoms/P";
import Img from "../Atoms/Img";
import Webcam from "react-webcam";
import Button from "../Atoms/Button";
import "../../scss/Templates/SeparatedTemplate16_1.scss";

function SeparatedTemplate16_1({ data, styleName }) {
  const { p_data, retry_btn_data, check_btn_data } = data;
  const { p_style, btn_style, retry_btn_style, check_btn_style } = styleName;

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
      {!imgSrc && (
        <>
          <P styleName={p_style}>{p_data.text}</P>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}></Webcam>
          <Button styleName={btn_style} onClick={capture}></Button>
        </>
      )}
      {imgSrc && (
        <>
          <Img image={imgSrc} alt="영정 사진" />
          {/* 다시누르기 버튼 누르면 imgSrc 다시 null로 */}
          <Button styleName={retry_btn_style}>{retry_btn_data}</Button>
          <Button styleName={check_btn_style}>{check_btn_data}</Button>
        </>
      )}
    </div>
  );
}

export default SeparatedTemplate16_1;
