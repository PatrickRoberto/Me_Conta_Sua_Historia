import React, { Component } from "react";

class Relato extends Component {
  STYLE = {
    border: "1px solid #4e4e4e",
    backgroundColor: "lightslategray",
    padding: "10px",
    padding: "10px",
    marginBottom: "10px",
  };

  constructor(props) {
    super(props);
    this.state = {
      TextLengh: 300,
      modalText: false,
    };
  }

  render() {
    const { TextoExibido } = this.props;
    return (
      <div className="card blue-grey darken-3">
        <div style={this.STYLE} className="card-content white-text">
          {TextoExibido}
        </div>
      </div>
    );
  }
}

export default Relato;
