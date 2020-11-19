import React from "react";
import "./index.css";

// var style = {
//   position: "fixed",
//   bottom: "0px",
//   width: "100%",
// };

var phantom = {
  display: "block",
  padding: "30px",
  height: "100px",
  width: "100%",
  marginTop: "30px",
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div className="black-white-text">
        Trabalho de Conclusão do Curso de Sistemas de Informação da PUC Minas{" "}
        <br />
        Autor: Patrick Roberto dos Santos <br />
        2020
      </div>
    </div>
  );
}

export default Footer;
