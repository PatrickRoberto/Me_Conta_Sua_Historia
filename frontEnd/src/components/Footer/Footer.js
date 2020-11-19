import React from 'react'

var style = {
    //backgroundColor: "#F8F8F8",
    //borderTop: "1px solid #E7E7E7",
    //textAlign: "center",
    //padding: "20px",
    //position: "absolute",
    //left: "0",
    //bottom: "0",
    //height: "80px",
    //width: "100%",
    position:"absolute",
    bottom:0,
    width:"100%",
   
}

var phantom = {
  display: 'block',
  padding: '30px',
  height: '60px',
  width: '100%',
  marginTop:'30px'
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style} className='black white-text'>
                Tabalho de Conclusão do Curso de Sistemas de Informação da PUC Minas <br />
                Autor: Patrick Roberto dos Santos <br />
                2020
            </div>
        </div>
    )
}

export default Footer