import React, { Component } from "react";

class Relato extends Component {
  STYLE = {
    //border: "1px solid red",
    borderRadius: '10px',
    //backgroundColor: "gray",
    padding: "10px",
    marginBottom: "10px",
    minHeight: '100px'
  };

  constructor(props) {
    super(props);
    this.state = {
      TextLengh: 300,
      modalText: false,
    };
  }

  render() {
    const { TextoExibido, relato } = this.props;
    return (
      <div className="card blue-grey darken-3">
        <div className="card-head white-text">
          Titulos
        </div>

        <div style={this.STYLE} className="card-content white-text col s4" >
          {TextoExibido}
        </div>

      </div>
    );
  }
}

export default Relato;
