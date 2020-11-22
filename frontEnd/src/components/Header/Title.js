import React from "react";
//import {logo1}  from '../../Help/Complementos'
import logo from "./logo_5.png";

export default function Title() {
  return (
    <div style={STYLE}>
      <img
        src={logo}
        width="50%"
        alt="Me Conta Sua História"
        border="1px solid green"
      />
    </div>
  );
}

const STYLE = {
  //border: '1px solid red',
  display: "flex",
  alignItems: "flex-justify",
  width: "50%",
};
