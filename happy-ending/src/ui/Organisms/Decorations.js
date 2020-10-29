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

      {flower === "rose" && <Img image={Rose} alt="rose"></Img>}
      {flower === "tulip" && <Img image={Tulip} alt="tulip"></Img>}
      {flower === "freesia" && <Img image={Freesia} alt="freesia"></Img>}
      {flower === "babyBreath" && <Img image={BabyBreath} alt="babyBreath"></Img>}
      {flower === "mum" && <Img image={Mum} alt="mum"></Img>}

      <Img image={Rain} alt="rain"></Img>

      {travelOrHome === "travel" && <Img image={Travel} alt="travel"></Img>}
      {travelOrHome === "home" && <Img image={Home} alt="home"></Img>}

      <Img image={Letter} alt="letter"></Img>
    </div>
  );
}

export default Decorations;
