import React from "react";
import Span from "../Atoms/Span";
import TextArea from "../Atoms/TextArea";
import TextField from "../Atoms/TextField";

function GraveStone() {
  // TODO: create style code
  // const style = ;

  return (
    <div
    // style = {style}
    >
      <TextField placeHolder="(어떤)"></TextField>
      <Span text="사람,"></Span>
      {/* <TextField placeHolder="OOO"></TextField> */}
      <TextArea placeHolder="(남기고 싶은 한마디를 적어주세요\nEx. 세상에 온기를 채우고 떠나다.)"></TextArea>
    </div>
  );
}

export default GraveStone;
