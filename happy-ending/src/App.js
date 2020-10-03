import React from "react";
import { Route, Switch } from "react-router-dom";

import P1 from "./ui/Pages/P1";
import P2 from "./ui/Pages/P2";
import P3 from "./ui/Pages/P3";
import P4 from "./ui/Pages/P4";
import P5 from "./ui/Pages/P5";
import P6 from "./ui/Pages/P6";
import P7 from "./ui/Pages/P7";
import P7_1 from "./ui/Pages/P7_1";
import P7_2 from "./ui/Pages/P7_2";
import P8 from "./ui/Pages/P8";
import P8_1 from "./ui/Pages/P8_1";
import P8_1_1 from "./ui/Pages/P8_1_1";
import P8_1_2 from "./ui/Pages/P8_1_2";
import P8_2 from "./ui/Pages/P8_2";
import P8_2_1 from "./ui/Pages/P8_2_1";
import P8_2_2 from "./ui/Pages/P8_2_2";
import P9 from "./ui/Pages/P9";
import P10 from "./ui/Pages/P10";
import P11 from "./ui/Pages/P11";
import P12_1 from "./ui/Pages/P12_1";
import P12_2 from "./ui/Pages/P12_2";
import P13 from "./ui/Pages/P13";
import P14 from "./ui/Pages/P14";
import P15 from "./ui/Pages/P15";
import P16 from "./ui/Pages/P16";
import P16_1 from "./ui/Pages/P16_1";
import P17 from "./ui/Pages/P17";
import P18 from "./ui/Pages/P18";
import P19 from "./ui/Pages/P19";
import P20 from "./ui/Pages/P20";
import P21 from "./ui/Pages/P21";
import P22 from "./ui/Pages/P22";
import P23 from "./ui/Pages/P23";
import P24 from "./ui/Pages/P24";
import P25 from "./ui/Pages/P25";
import P26 from "./ui/Pages/P26";
import P27 from "./ui/Pages/P27";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <P1 />
        </Route>
        <Route path="/p2">
          <P2 />
        </Route>
        <Route path="/p3">
          <P3 />
        </Route>
        <Route path="/p4">
          <P4 />
        </Route>
        <Route path="/p5">
          <P5 />
        </Route>
        <Route path="/p6">
          <P6 />
        </Route>
        <Route exact path="/p7">
          <P7 />
        </Route>
        <Route path="/p7_1">
          <P7_1 />
        </Route>
        <Route path="/p7_2">
          <P7_2 />
        </Route>
        <Route exact path="/p8">
          <P8 />
        </Route>
        <Route exact path="/p8_1">
          <P8_1 />
        </Route>
        <Route path="/p8_1_1">
          <P8_1_1 />
        </Route>
        <Route path="/p8_1_2">
          <P8_1_2 />
        </Route>
        <Route exact path="/p8_2">
          <P8_2 />
        </Route>
        <Route path="/p8_2_1">
          <P8_2_1 />
        </Route>
        <Route path="/p8_2_2">
          <P8_2_2 />
        </Route>
        <Route path="/p9">
          <P9 />
        </Route>
        <Route path="/p10">
          <P10 />
        </Route>
        <Route path="/p11">
          <P11 />
        </Route>
        <Route path="/p12_1">
          <P12_1 />
        </Route>
        <Route path="/p12_2">
          <P12_2 />
        </Route>
        <Route path="/13">
          <P13 />
        </Route>
        <Route path="/p14">
          <P14 />
        </Route>
        <Route path="/p15">
          <P15 />
        </Route>
        <Route exact path="/p16">
          <P16 />
        </Route>
        <Route path="/p16_1">
          <P16_1 />
        </Route>
        <Route path="/p17">
          <P17 />
        </Route>
        <Route path="/p18">
          <P18 />
        </Route>
        <Route path="/p19">
          <P19 />
        </Route>
        <Route path="/p20">
          <P20 />
        </Route>
        <Route path="/p21">
          <P21 />
        </Route>
        <Route path="/p22">
          <P22 />
        </Route>
        <Route path="/p23">
          <P23 />
        </Route>
        <Route path="/p24">
          <P24 />
        </Route>
        <Route path="/p25">
          <P25 />
        </Route>
        <Route path="/p26">
          <P26 />
        </Route>
        <Route path="/p27">
          <P27 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
