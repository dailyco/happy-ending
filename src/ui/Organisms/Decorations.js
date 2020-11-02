import React from "react";
import Img from "../Atoms/Img";
import Selfie from "../Molecules/Selfie";
import classNames from "classnames";
import Rose from "../../assets/images/29p_images/29 1F.png";
import Tulip from "../../assets/images/29p_images/29 2F.png";
import Freesia from "../../assets/images/29p_images/29 3F.png";
import BabyBreath from "../../assets/images/29p_images/29 4F.png";
import Mum from "../../assets/images/29p_images/29 5F.png";
import Rain from "../../assets/images/29p_images/29 ebook-p2.png";
import Travel from "../../assets/images/29p_images/29 ebook-p3 Travel.png";
import Home from "../../assets/images/29p_images/29 ebook-p3 Home.png";
import Letter from "../../assets/images/29p_images/29 ebook-letter.png";

function Decorations({ data, styleName }) {
  const { selfie, flower, travelOrHome } = data;

  return (
    <div className={classNames("Decorations")}>
      <Selfie data={selfie}></Selfie>

      {flower === "rose" && <Img image={Rose} alt="rose" styleName="flower"></Img>}
      {flower === "tulip" && <Img image={Tulip} alt="tulip" styleName="flower"></Img>}
      {flower === "freesia" && <Img image={Freesia} alt="freesia" styleName="flower"></Img>}
      {flower === "babyBreath" && <Img image={BabyBreath} alt="babyBreath" styleName="flower"></Img>}
      {flower === "mum" && <Img image={Mum} alt="mum" styleName="flower"></Img>}

      <Img image={Rain} alt="rain" styleName="rain"></Img>

      {travelOrHome === "travel" && <Img image={Travel} alt="travel" styleName="travel"></Img>}
      {travelOrHome === "home" && <Img image={Home} alt="home" styleName="home"></Img>}

      <Img image={Letter} alt="letter" styleName="letter"></Img>
    </div>
  );
}

export default Decorations;
