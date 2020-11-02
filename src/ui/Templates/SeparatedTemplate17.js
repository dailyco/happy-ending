import React, { useState } from "react";
import Img from "../Atoms/Img";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Dquestion from "../Organisms/Dquestion";
import P17Video from "../../assets/videos/17_front.mp4";

import "../../scss/Templates/SeparatedTemplate17.scss";

function SeparatedTemplate17({ data, styleName, history }) {
  const { dq_data, flowers } = data;
  const { tp_style, dq_style } = styleName;

  const [constrasts, setConstrasts] = useState(flowers);

  const onClick = (e) => {
    e.preventDefault();

    const flowerName = e.target.id;

    setConstrasts(constrasts.map((constrast) => (constrast.alt === flowerName ? { ...constrast, active: !constrast.active } : constrast)));

    localStorage.setItem("flower", flowerName);
    console.log(localStorage);

    setTimeout(() => {
      history.push("/p18");
    }, 2000);
  };

  return (
    <div className={classNames("SeparatedTemplate17", tp_style)}>
      <video autoPlay muted>
        <source src={P17Video} type="video/mp4" />
      </video>
      {flowers.map((flower, idx) => (
        <div key={idx}>
          <Img image={flower.active ? flower.glow : flower.shadow} alt={flower.alt}></Img>
          <Img image={flower.image} alt={flower.alt}></Img>
          <Link to={"/p18"} id={flower.alt} onClick={onClick}></Link>
        </div>
      ))}

      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
    </div>
  );
}

export default SeparatedTemplate17;