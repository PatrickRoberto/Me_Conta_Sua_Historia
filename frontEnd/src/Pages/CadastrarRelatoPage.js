import React, {Component, useEffect, useState} from 'react';
import estados from '../Help/Ufs';
import {racas, generos} from '../Help/Dominios';
import  * as service from '../Service/Service'

import M from "materialize-css";

class CadastrarRelatoPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nomePessoa: '',
            idadePessoa: 18,
            racaPessoa: '',
            generoPessoa: '',
            textoRelato: '',
            dataRelato: '',
            localRelato: '',
            ufRelato: '',
            cidadeRelato: '',
            STYLE: {
                border: '1px solid lightgray',
                margin: '5px',
                padding: '15px'
            }
        }
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
            }
            try {
                await service.CadastroRelato(relatoCreate);
                /*this.setState({
                    nomePessoa: '',
                    idadePessoa: 18,
                    racaPessoa: '',
                    generoPessoa: '',
                    textoRelato: '',
                    dataRelato: '',
                    localRelato: '',
                    ufRelato: '',
                    cidadeRelato: ''
                });
                */

                window.location = '/'

            } catch (error) {
                console.log('Não rolou')
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
        <div className="container">
            <h4>Realize aqui o seu relato</h4>

            <div style={{padding:'15px'}}>
                <form onSubmit={ e => this.enviarContato(e)}>
                    <div style={this.state.STYLE}>
                    <h5>Informações Pessoais</h5>
                        <label>
                            Nome: (opicional)
                            <input type="text" name="nomePessoa" value={this.state.nomePessoa} onChange={e => this.setProperty('nomePessoa', e)}/>
                        </label>
                        <label>
                            Idade:
                            <input type="number" min="1" name="idadePessoa" value={this.state.idadePessoa} onChange={e => this.setProperty('idadePessoa', e)}/>
                        </label>
                        <label>
                            Raça:
                            <select value={this.state.racaPessoa}  onChange={e => this.setProperty('racaPessoa', e)} name="racaPessoa">
                                <option disabled value="">Selecionar</option>
                                {racas.map((raca) => {
                                    return (
                                        <option key={raca} value={raca}>{raca}</option>
                                    )
                                })}
                            </select>
                        </label>
                        <label>
                            Genêro:
                            <select value={this.state.generoPessoa} onChange={e => this.setProperty('generoPessoa', e)} name="generoPessoa">
                                <option value="" disabled>Selecionar</option>
                                {generos.map((genero) => {
                                    return (
                                        <option key={genero} value={genero}>{genero}</option>
                                    )
                                })}
                            </select>
                        </label>
                    </div>
                    
                    <div style={this.state.STYLE}>
                        <h5>Relato</h5>
                        <label>
                            Escreva aqui seu relato:
                            <textarea name="textoRelato" rows="15" value={this.state.textoRelato} onChange={e => this.setProperty('textoRelato', e)}>
                            </textarea>
                        </label>
                                              
                    </div>
                   
                    <div style={this.state.STYLE}>
                        <h5>Detalhes do Relato</h5>
                        <label>
                            Local: adicionar um icone que explique a pessoa como preencher
                            <input type="text" name="localRelato" value={this.state.localRelato} onChange={e => this.setProperty('localRelato', e)}/>
                        </label>
                        <label>
                            UF:
                            <select value={this.state.ufRelato} onChange={e => this.setProperty('ufRelato', e)} name="ufRelato">
                                {estados.map(item => {
                                    return (
                                        <option key={item.sigla} value={item.sigla}>{item.nome}</option>
                                    )
                                })}
                            </select>
                        </label>
                        <label>
                            Cidade:
                            <input type="text" name="cidadeRelato" value={this.state.cidadeRelato} onChange={e => this.setProperty('cidadeRelato', e)}/>
                        </label>
                        <label>
                            Data Ocorrido:
                            <input type="date" name="dataRelato" value={this.state.dataRelato} onChange={e => this.setProperty('dataRelato', e)}/>
                        </label>
                    </div>

                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
    }
}

export default CadastrarRelatoPage;

