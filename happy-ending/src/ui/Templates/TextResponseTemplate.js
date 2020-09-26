import React from "react";
import Dquestion from "../Organisms/Dquestion";
import FullTextFieldResponse from "../Organisms/FullTextFieldResponse";

function TextResponseTemplate({ day, question, color, alignment }) {
  return (
    <div>
      <Dquestion className={alignment} day={day} question={question} color={color}></Dquestion>
      <FullTextFieldResponse></FullTextFieldResponse>
    </div>
  );
}

TextResponseTemplate.defaultProps = {
  alignment: "left",
};

export default TextResponseTemplate;
