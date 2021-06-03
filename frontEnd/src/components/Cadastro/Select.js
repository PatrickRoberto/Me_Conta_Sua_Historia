import React, { Component } from 'react'

export default class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
    
          options: [],
          }
    };
    
    componentDidMount(){
        this.setState({options: this.props.options})
    }

    
    render() {
        const {options, valor, titulo} = this.props;
 return (
            <div>
                <label className="col s3">
                {titulo}:
                <select
                  required
                  value={valor}
                  onChange={(e) => this.setProperty("racaPessoa", e)}
                  name="racaPessoa"
                >
                  <option disabled value="">
                    Selecionar
                  </option>
                  {
                   options.map((opt) => {
                    return (
                      <option key={opt.ID_REF} value={opt.ID_REF}>
                        {opt.TEXTO}
                      </option>
                    );
                  })}
                </select>
                </label>
            </div>
        )
      }

}
        