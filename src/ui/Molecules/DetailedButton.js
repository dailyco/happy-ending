import React from "react";
import Button from "../Atoms/Button";
import Icon from "../Atoms/Icon";
import Span from "../Atoms/Span";
import classNames from "classnames";

function DetailedButton({ data, styleName }) {
  const { icon, span_data, onClick } = data;
  const { button_style, icon_style, span_style } = styleName;

  return (
    <div className={classNames("DetailedButton")}>
      <Button styleName={button_style} onClick={onClick}>
        <Icon alt={icon.alt} icon={icon.src} style_name={icon_style}></Icon>
      </Button>
      <Span styleName={span_style}>{span_data}</Span>
    </div>
  );
}

export default DetailedButton;
