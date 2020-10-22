import React from "react";
import Img from "../Atoms/Img";
import { Link } from "react-router-dom";
import Dquestion from "../Organisms/Dquestion";
import P17Video from "../../assets/videos/17_front.mp4";

import "../../scss/Templates/SeparatedTemplate17.scss";

function SeparatedTemplate17({ data, styleName }) {
  const { bg_data, dq_data, imgs } = data;
  const { dq_style } = styleName;

  return (
    <div className={"SeparatedTemplate17"}>
      <video autoPlay muted>
        <source src={P17Video} type="video/mp4" />
      </video>
      {/* <Img image={bg_data.image} alt={bg_data.alt}></Img> */}
      {imgs.map((img, index) => (
        <Link to={"/p18"} key={index}>
          <Img image={img.shadow} alt={img.alt}></Img>
          <Img
            image={img.image}
            alt={img.alt}
            onClick={() => {
              localStorage.setItem("flower", img.alt);
            }}
          ></Img>
        </Link>
      ))}
      <Dquestion data={dq_data} styleName={dq_style}></Dquestion>
    </div>
  );
}

export default SeparatedTemplate17;
