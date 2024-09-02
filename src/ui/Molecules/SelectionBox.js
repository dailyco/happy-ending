import React, { useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";

function SelectionBox({ data, styleName }) {
  const navigate = useNavigate();
  const { prevent_click, buttons } = data;
  const { btn_style } = styleName;
  const selectionBoxRef = useRef();

  const clickHandler = useCallback((e) => {
    e.preventDefault();

    if (prevent_click.current && e.target.classList.contains("Button")) {
      e.target.classList.add("selected");
      Array.from(e.currentTarget.querySelectorAll(".Button"))
        .filter((b) => !b.classList.contains("selected"))
        .forEach((b) => b.classList.add("unselected"));

      if (!e.target.classList.contains("wait-until-video-end")) {
        e.target.addEventListener("animationend", () => {
          navigate(e.target.attributes.to.value);
        });
      }
    }
  }, [navigate, prevent_click]);

  useEffect(() => {
    selectionBoxRef.current.addEventListener("click", clickHandler);
    return () => {
      if (selectionBoxRef.current)
        selectionBoxRef.current.removeEventListener("click", clickHandler);
    }
  }, [clickHandler]);

  return (
    <div className={"SelectionBox"} ref={selectionBoxRef}>
      {buttons.map((button, index) => (
        <Button key={index} styleName={btn_style} to={button.to} onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </div>
  );
}

export default SelectionBox;
