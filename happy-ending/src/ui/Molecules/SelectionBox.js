import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Atoms/Button";

function SelectionBox({ data, styleName }) {
  const history = useHistory();
  const { buttons } = data;
  const { btn_style } = styleName;
  const selectionBoxRef = useRef();

  useEffect(() => {
    selectionBoxRef.current.addEventListener('click', clickHandler);
    return () => selectionBoxRef.current.removeEventListener('click', clickHandler);
  }, []);
  
  function clickHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains('Button')) {
      e.target.classList.add('selected');
      Array.from(e.currentTarget.querySelectorAll('.Button')).filter(
        (b) => !b.classList.contains('selected')).forEach(b => b.classList.add('unselected'));
      
      e.target.addEventListener('animationend', () => {
        history.push(e.target.attributes.to.value);
      })
    }
  }

  return (
    <div className={"SelectionBox"} ref={selectionBoxRef}>
      {buttons.map((button, index) => (
        <Button key={index} styleName={btn_style} to={button.to}>{button.text}</Button>
      ))}
    </div>
  );
}

export default SelectionBox;
