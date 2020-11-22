import React, { Component } from "react";
import estados from "../Help/Ufs";
import { racas, generos } from "../Help/Dominios";
import * as service from "../Service/Service";

import M from "materialize-css";

class CadastrarRelatoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomePessoa: "",
      idadePessoa: 18,
      racaPessoa: "",
      generoPessoa: "",
      textoRelato: "",
      dataRelato: "",
      localRelato: "",
      ufRelato: "",
      cidadeRelato: "",
      agressaoFisica: false,
      aconteceuComigo: true,
      //anoRelato: new Date().getFullYear(),
      //mesRelato: new Date().getMonth(),
      //diaRelato: '',
      STYLE: {
        border: "1px solid lightgray",
        margin: "5px",
        padding: "15px",
      },
    };
  }

  enviarContato = async (event) => {
    event.preventDefault();
    var relatoCreate = {
      nomePessoa: this.state.nomePessoa,
      idadePessoa: this.state.idadePessoa,
      racaPessoa: this.state.racaPessoa,
      generoPessoa: this.state.generoPessoa,
      textoRelato: this.state.textoRelato,
      dataRelato: this.state.dataRelato,
      localRelato: this.state.localRelato,
      ufRelato: this.state.ufRelato,
      cidadeRelato: this.state.cidadeRelato,
      agressaoFisica: this.state.agressaoFisica,
      aconteceuComigo: this.state.aconteceuComigo,
      //anoRelato:  this.state.anoRelato,
      //mesRelato: this.state.mesRelato,
      //diaRelato: this.state.diaRelato,
    };
    try {
      await service.CadastroRelato(relatoCreate);
      window.location = "/";
    } catch (error) {
      console.log("Não rolou");
    }
  };

  componentDidMount() {
    M.AutoInit();
  }

  setProperty(key, event) {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <div className="">
        <h5 style={{ margin: "15px", padding: "1px", textSize: "2em" }}>
          Realize aqui o seu relato
        </h5>
        <div style={{ padding: "15px" }}>
          <form onSubmit={(e) => this.enviarContato(e)}>
            <div style={this.state.STYLE} className="row">
              <h5>Informações Pessoais</h5>

              <label className="col s3">
                Foi com você?
                <select
                  value={this.state.aconteceuComigo}
                  onChange={(e) => this.setProperty("aconteceuComigo", e)}
                  name="aconteceuComigo"
                >
                  <option key={"aconteceuComigo"} value={true}>
                    {"Acontecue comigo"}
                  </option>
                  <option key={"PresencieiAcontecendo"} value={false}>
                    {"Presenciei acontecendo!"}
                  </option>
                </select>
              </label>

              <label className="col s6">
                Nome: (opicional)
                <input
                  type="text"
                  name="nomePessoa"
                  value={this.state.nomePessoa}
                  onChange={(e) => this.setProperty("nomePessoa", e)}
                />
              </label>
              <label className="col s3">
                Idade:
                <input
                  type="number"
                  min="1"
                  name="idadePessoa"
                  value={this.state.idadePessoa}
                  onChange={(e) => this.setProperty("idadePessoa", e)}
                />
              </label>
              <label className="col s3">
                Raça:
                <select
                  value={this.state.racaPessoa}
                  onChange={(e) => this.setProperty("racaPessoa", e)}
                  name="racaPessoa"
                >
                  <option disabled value="">
                    Selecionar
                  </option>
                  {racas.map((raca) => {
                    return (
                      <option key={raca} value={raca}>
                        {raca}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label className="col s3">
                Genêro:
                <select
                  value={this.state.generoPessoa}
                  onChange={(e) => this.setProperty("generoPessoa", e)}
                  name="generoPessoa"
                >
                  <option value="" disabled>
                    Selecionar
                  </option>
                  {generos.map((genero) => {
                    return (
                      <option key={genero} value={genero}>
                        {genero}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div style={this.state.STYLE} className="row">
              <h5>Relato</h5>
              <label className="col s12">
                <textarea
                  className="materialize-textarea"
                  name="textoRelato"
                  rows="25"
                  value={this.state.textoRelato}
                  onChange={(e) => this.setProperty("textoRelato", e)}
                  placeholder=" Escreva aqui seu relato:"
                ></textarea>
              </label>
            </div>

            <div style={this.state.STYLE} className="row">
              <h5>Detalhes do Relato</h5>

              <label className="col s5">
                Local: (escola, trabalho, rua, restaurante...)
                <input
                  type="text"
                  name="localRelato"
                  value={this.state.localRelato}
                  onChange={(e) => this.setProperty("localRelato", e)}
                />
              </label>

              <label className="col s1">
                UF:
                <select
                  value={this.state.ufRelato}
                  onChange={(e) => this.setProperty("ufRelato", e)}
                  name="ufRelato"
                >
                  {estados.map((item) => {
                    return (
                      <option key={item.sigla} value={item.sigla}>
                        {item.nome}
                      </option>
                    );
                  })}
                </select>
              </label>

              <label className="col s3">
                Cidade:
                <input
                  type="text"
                  name="cidadeRelato"
                  value={this.state.cidadeRelato}
                  onChange={(e) => this.setProperty("cidadeRelato", e)}
                />
              </label>

              <label className="col s3">
                Houve agressão física:
                <select
                  value={this.state.agressaoFisica}
                  onChange={(e) => this.setProperty("agressaoFisica", e)}
                  name="agressaoFisica"
                >
                  <option key={"Não"} value={false}>
                    {"Não"}
                  </option>
                  <option key={"Sim"} value={true}>
                    {"Sim"}
                  </option>
                </select>
              </label>

              <label className="col s5">
                Data Ocorrido: (se não lembrar a data exata, pode colocar
                somente ano e mês)
                <input
                  type="date"
                  name="dataRelato"
                  value={this.state.dataRelato}
                  onChange={(e) => this.setProperty("dataRelato", e)}
                />
              </label>
            </div>
            
            
            <button  
              className="waves-effect grey darken-1 btn"
              style={{ fontSize: "0.9em", height:"5em", lineHeight: '2', width:"12em" }} 
            >
              <input type="submit" value="Enviar"  />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastrarRelatoPage;
