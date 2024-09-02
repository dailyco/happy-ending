import React from "react";
import { Route, Routes } from "react-router-dom";

import { pages } from "./ui/Pages";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<pages.P1 />} exact />
      <Route path="/p0" element={<pages.P0 />} />
      <Route path="/p2" element={<pages.P2 />} />
      <Route path="/p3" element={<pages.P3 />} />
      <Route path="/p4" element={<pages.P4 />} />
      <Route path="/p5" element={<pages.P5 />} />
      <Route path="/p6" element={<pages.P6 />} />
      <Route path="/p7" element={<pages.P7 />} exact />
      <Route path="/p7_1" element={<pages.P7_1 />} />
      <Route path="/p7_2" element={<pages.P7_2 />} />
      <Route path="/p8" element={<pages.P8 />} exact />
      <Route path="/p8_1" element={<pages.P8_1 />} exact />
      <Route path="/p8_1_1" element={<pages.P8_1_1 />} />
      <Route path="/p8_1_2" element={<pages.P8_1_2 />} />
      <Route path="/p8_2" element={<pages.P8_2 />} exact />
      <Route path="/p8_2_1" element={<pages.P8_2_1 />} />
      <Route path="/p8_2_2" element={<pages.P8_2_2 />} />
      <Route path="/p9_1" element={<pages.P9_1 />} />
      <Route path="/p9_2" element={<pages.P9_2 />} />
      <Route path="/p10" element={<pages.P10 />} />
      <Route path="/p11" element={<pages.P11 />} />
      <Route path="/p12_1" element={<pages.P12_1 />} />
      <Route path="/p12_2" element={<pages.P12_2 />} />
      <Route path="/p13" element={<pages.P13 />} />
      <Route path="/p14" element={<pages.P14 />} />
      <Route path="/p15" element={<pages.P15 />} />
      <Route path="/p16" element={<pages.P16 />} exact />
      <Route path="/p16_1" element={<pages.P16_1 />} />
      <Route path="/p17" element={<pages.P17 />} />
      <Route path="/p18" element={<pages.P18 />} />
      <Route path="/p19" element={<pages.P19 />} />
      <Route path="/p20" element={<pages.P20 />} />
      <Route path="/p21" element={<pages.P21 />} />
      <Route path="/p22" element={<pages.P22 />} />
      <Route path="/p23" element={<pages.P23 />} />
      <Route path="/p24" element={<pages.P24 />} />
      <Route path="/p25" element={<pages.P25 />} />
      <Route path="/p26" element={<pages.P26 />} />
      <Route path="/p27" element={<pages.P27 />} />
      <Route path="/p29" element={<pages.P29 />} />
      <Route element={<pages.P404 />} />
    </Routes>
  );
}

export default App;
