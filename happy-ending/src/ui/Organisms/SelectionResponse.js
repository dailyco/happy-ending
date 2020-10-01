import React from "react";
import SelectionBox from "../Molecules/SelectionBox";

function SelectionResponse({ data, styleName }) {
  return <SelectionBox data={data} styleName={styleName}></SelectionBox>;
}

export default SelectionResponse;
