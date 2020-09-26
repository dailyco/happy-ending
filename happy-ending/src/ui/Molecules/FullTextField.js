import React from "react";
import TextField from "../Atoms/TextField";

function FullTextField({ opacity, border_radius, color }) {
  return (
    <div className={`FullTextField ${opacity} ${border_radius} ${color}`}>
      <TextField></TextField>
    </div>
  );
}

export default FullTextField;
