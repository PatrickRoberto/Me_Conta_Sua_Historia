const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const helper = require('../Helpers/Helper.js')


const dotenv = require('dotenv');

const { Parser } = require('json2csv');

dotenv.config();

const RelatoModel = require('../models/RelatoModel');
const NomesModel = require('../models/NomesModel')

const URL_CONNECTION = process.env.DB_CONNECTION;


const client = mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

//A partir daqui imprimo as coisas
let Buscas = 0;
const todosRelatos = async () => {
    const data = await RelatoModel.find({});
    console.log('Realizaou a busca: ', Buscas++);

    return data;
}

const CadastrarRelato = async (Relato) =>{
    try {
        if(!Relato) {
            console.log('Chegou vazio')
            return {message: 'Dados Vazios'}
        }
        const nomes = []
        const dataNames =  await NomesModel.find({}, {_id: 0, Name: 1})
        dataNames.forEach(item => nomes.push(item.Name))

        Relato.textoRelatoTratado = await helper.removerNome(Relato.textoRelato, nomes)
        const relatoCadastro = new RelatoModel(Relato);
        const data = await relatoCadastro.save();

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }


}


const atualizarTextoRelatos = async () =>{
    console.log('entrou na chamada')
    const relatos = await RelatoModel.find({}, {_id: 1, textoRelato: 1});
    
    const nomes = []
    const dataNames =  await NomesModel.find({}, {_id: 0, Name: 1})
    dataNames.forEach(item => nomes.push(item.Name))

    for(relato of relatos){
        const textoTratado = await helper.removerNome(relato.textoRelato, nomes)
        const {_id} = relato
        await RelatoModel.updateOne({_id: _id}, {  $set: {textoRelatoTratado: textoTratado}})
    }
    return 'Foi'
}


    //Trocar para fazer toda essa busca pelo próprio banco de dados
    const resumoRelatosPorGenero = async () => {
        const data = await RelatoModel.find({}, {_id: 0, generoPessoa: 1});
        
        const generos = [];

        data.forEach(({generoPessoa}) => {
            if(!generos.includes(generoPessoa))
                generos.push(generoPessoa);
        });
        qtdPorGeneros = [];
        generos.forEach(
            gender => {
                let qtd = data.reduce( (accumulator, current) => {
                    return accumulator + (current.generoPessoa === gender ? 1 : 0)
                }, 0);

                qtdPorGeneros.push(qtd);
            }
        );

        retorno = {generos, qtdPorGeneros} ;
        console.log('Realizaou a busca: ', Buscas++);
        return retorno;
    }

    const downloadCsv = async(filtros) =>{
        console.log(filtros)
        try{
            let data = await RelatoModel.find({});
            if(filtros.generoPessoa){
                data = data.filter((obj) =>{
                    return obj.generoPessoa === filtros.generoPessoa; 
                });
            }
            if(filtros.ufRelato){
                data = data.filter((obj) =>{
                    return obj.ufRelato === filtros.ufRelato; 
                });
            }
            
            const fields = [
                'idadePessoa',
                'racaPessoa',
                'generoPessoa',
                'dataRelato',
                'localRelato',
                'ufRelato',
                'cidadeRelato',
                'aconteceuComigo',
                'agressaoFisica',
                'casoPolicial'
            ];
            const opts = {fields};

            const parser = new Parser(opts);
            const csv = parser.parse(data);
            return csv;

        }catch(err){
            console.log(err);
            throw err;
        }
       
    }


module.exports = { todosRelatos, CadastrarRelato, resumoRelatosPorGenero, downloadCsv, atualizarTextoRelatos};


