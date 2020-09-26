import React from "react";
import D_Question from "../Organisms/D_Question";
import FullTextFieldResponse from "../Organisms/FullTextFieldResponse";

function TextResponseTemplate({ day, question, color, alignment }) {
  return (
    <div>
      <D_Question className={alignment} day={day} question={question} color={color}></D_Question>
      <FullTextFieldResponse></FullTextFieldResponse>
    </div>
  );
}

TextResponseTemplate.defaultProps = {
  alignment: "left",
};

export default TextResponseTemplate;
