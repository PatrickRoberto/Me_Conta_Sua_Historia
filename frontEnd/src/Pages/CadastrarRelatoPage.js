import React, { Component } from "react";
import Select from 'react-select';


import estados from "../Help/Ufs";
import  * as dominios from '../Service/ServiceComplementos' 
import { racas, generos } from "../Help/Dominios";
import * as service from "../Service/ServiceRelato";
import {RecuperaCidades, RecuperaLocal} from '../Service/ServiceComplementos'

import Modal from "react-modal";

import M from "materialize-css";
//import B from "bootstrap"

//const Cidades = [{value:'Belo', label:'Belo Horizonte'}]

class CadastrarRelatoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      racaText: [],
       
      modalIsOpen: false,

      nomePessoa: "",
      idadePessoa: 18,
      racaPessoa: "",
      generoPessoa: "",
      textoRelato: "",
      dataRelato: "",
      localRelato: -1,
      ufRelato: "",
      cidadeRelato: "",
      agressaoFisica: false,
      aconteceuComigo: true,
      casoPolicial: false,
      STYLE: {
        border: "1px solid lightgray",
        margin: "5px",
        padding: "15px",
      },
      CidadesSelect: [],
      LocaisSelect: [],
    };

   
    this.load();
  }


  load = async () => {
    const t = await dominios.RecuperaEtnia();
    this.setState({racaText: t });
  }

  customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  cadastrarRelato = async (event) => {
    event.preventDefault();
    console.log('Entrei aqui')

    this.setState({modalIsOpen: true});

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
      casoPolicial: this.state.casoPolicial,

    };
    try {
      const resp = await service.CadastroRelato(relatoCreate);
      console.log(resp.status)
      //Adicionar aqui o comando para mostrar o Modal
      window.location = "/";
    } catch (error) {
      console.log("Não rolou");
    }
  };

  async componentDidMount() {
    M.AutoInit();
    try {
      const cidadesSelect = await RecuperaCidades(this.state.ufRelato)
      if(cidadesSelect)
        this.setState({CidadesSelect: cidadesSelect})

      const retornoLocal = await RecuperaLocal()
      const localSelect = retornoLocal.map(l => {return {value: l.ID, label: l.Texto}})
      if(localSelect)
        this.setState({LocalSelect: localSelect})

    } catch (error) {
      console.log("Deu ruim");
    }
  }

  async componentDidUpdate(prevProps, prevState){
    try {
      const { ufRelato} = prevState;
      if(this.state.ufRelato !== ufRelato )
      {
        const carregarCidades = await RecuperaCidades(this.state.ufRelato)
        const cidadesSelect = carregarCidades.map( c => {return {value: c.nome, label: c.nome}})
        if(cidadesSelect)
          this.setState({CidadesSelect: cidadesSelect})
       
      }

    } catch (error) {
      console.log("Deu ruim");
    }
  }


  setProperty(key, event) {
    if(event.target)
      this.setState({ [key]: event.target.value });
    else if(event.value)
      this.setState({ [key]: event.value });
    else 
      console.log('Nenhum atributo cadastrado')
  }

   carregarDados = async () => {
    const retornoLocal = await RecuperaLocal()
    const localSelect = retornoLocal.map(l => {return {value: l.ID, label: l.Texto}})
    if(localSelect)
      this.setState({LocalSelect: localSelect})

  }

  render() {

    const {LocalSelect} = this.state


    return (
      <div className="container">
        <h5 style={{ margin: "15px", padding: "1px", textSize: "2em" }}>
          Realize aqui o seu relato
        </h5>
        <div style={{ padding: "15px" }}>
          <form onSubmit={(e) => this.cadastrarRelato(e)}>
            <div style={this.state.STYLE} className="row">
              
              <h5>Informações Pessoais</h5>
              
              <label className="col-sm-12 col-md-3">
                Foi com você?
                <select 
                  value={this.state.aconteceuComigo}
                  onChange={(e) => this.setProperty("aconteceuComigo", e)}
                  name="aconteceuComigo"
                >
                  <option key={"aconteceuComigo"} value={true}>
                    {"Aconteceu comigo"}
                  </option>
                  <option key={"PresencieiAcontecendo"} value={false}>
                    {"Presenciei acontecendo!"}
                  </option>
                </select>
              </label>

              <label className="col-sm-12 col-md-9">
                Nome: (opicional)
                <input
                  type="text"
                  name="nomePessoa"
                  value={this.state.nomePessoa}
                  onChange={(e) => this.setProperty("nomePessoa", e)}
                />
              </label>
              
              <label className="col-sm-6 col-md-4">
                Etnia:
                <select
                  required
                  value={this.state.racaPessoa}
                  onChange={(e) => this.setProperty("racaPessoa", e)}
                  name="racaPessoa"
                >
                  <option disabled value="">
                    Selecionar
                  </option>
                  {
                   racas.map((raca) => {
                    return (
                      <option key={raca} value={raca}>
                        {raca}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label className="col-sm-6 col-md-4">
                Genêro:
                <select
                  required
                  value={this.state.generoPessoa}
                  onChange={(e) => this.setProperty("generoPessoa", e)}
                  name="generoPessoa"
                >
                  <option value="" disabled>
                    Selecionar
                  </option>
                  {generos.map((genero) => {
                    return (
                      <option key={genero.ID_REF} value={genero.ID_REF}>
                        {genero.TEXTO}
                      </option>
                    );
                  })}
                </select>
              </label>
              
              <label className="col-sm-6 col-md-4">
                Idade :
                <input
                  required
                  type="number"
                  min="1"
                  name="idadePessoa"
                  value={this.state.idadePessoa}
                  onChange={(e) => this.setProperty("idadePessoa", e)}
                />
              </label>

            </div>

            <div style={this.state.STYLE} className="row">
              <h5>Relato</h5>
              <label className="col-sm-12">
                <textarea
                  required
                  className="form-control"
                  name="textoRelato"
                  rows="25"
                  value={this.state.textoRelato}
                  onChange={(e) => this.setProperty("textoRelato", e)}
                  placeholder=" Escreva aqui seu relato:"

                  style={{height: '120px'}}
                ></textarea>
              </label>
            </div>

            <div style={this.state.STYLE} className="row">
              <h5>Detalhes do Relato</h5>

              <label className="col-sm-4 col-md-4">
                Local: (escola, trabalho, rua, restaurante...)
                <Select
                  name="localRelato"
                  onChange={(e) => this.setProperty("localRelato", e)}
                  options={LocalSelect}
                />
              </label>

              <label className="col-sm-4 col-md-3">
                UF:
                
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  required
                  
                  onChange={(e) => this.setProperty("ufRelato", e)}
                  name="ufRelato"
                  options={estados}
                >
                  
                </Select>
              </label>

              <label className="col-sm-4 col-md-5">
                Cidade:
                <Select
                  name="cidadeRelato"
              
                  onChange={(e) => this.setProperty("cidadeRelato", e)}
                  options={this.state.CidadesSelect}
                />
              </label>

              <label className="col-sm-4 col-md-2">
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

              <label className="col-sm-4 col-md-2">
                A Policia foi acionada?
                <select
                  value={this.state.casoPolicial}
                  onChange={(e) => this.setProperty("casoPolicial", e)}
                  name="casoPolicial"
                >
                  <option key={"Não"} value={false}>
                    {"Não"}
                  </option>
                  <option key={"Sim"} value={true}>
                    {"Sim"}
                  </option>
                </select>
              </label>

              <label className="col-sm-4 col-md-4">
                Data Ocorrido: 
                <input
                  required
                  type="date"
                  name="dataRelato"
                  value={this.state.dataRelato}
                  onChange={(e) => this.setProperty("dataRelato", e)}
                />
                (se não lembrar a data exata, pode colocar
                uma data aproximada)
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

        <Modal
          isOpen={this.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={() => { window.location = "/"; }}
          style={this.customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>Hello</h2>
          
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

      </div>
    );
  }
}

export default CadastrarRelatoPage;
