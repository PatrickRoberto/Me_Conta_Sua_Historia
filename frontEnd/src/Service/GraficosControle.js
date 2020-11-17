import  * as service from './Service';
import {faixaEtarias} from '../Help/Dominios'


//Exemplo
const valueFormat = (label, labels, data, min, max) => {
    return {label: label,
        labels: labels,
        data: data,
        min: min,
        max: max,
    }
}


const faixaEtaria = (relatos) =>{
    let qtdPorFaixa = [];
    faixaEtarias.forEach(faixa =>{
        let qtd = relatos.reduce((acc, {idadePessoa}) =>{
            return acc + (idadePessoa >= faixa.min && idadePessoa < faixa.max ? 1 : 0);
        }, 0)
        
        qtdPorFaixa.push(qtd);
    });
    const faixaEtarisText = faixaEtarias.map(faixa => faixa.faixa);
    return valueFormat('Faixa Etaria', faixaEtarisText, qtdPorFaixa, 0, 10);
}

const distribuicaoGenerosService = async () =>{
    const dados = await service.RecuperarRelatosParaGraficoGenero();
    return valueFormat('Genero', dados.generos, dados.qtdPorGeneros, 0, 10);
}

const distribuicaoGeneros = (relatos) =>{
    
    const generos = [];
    const qtdPorGeneros = [];

    relatos.forEach(({generoPessoa}) => {
        if(!generos.includes(generoPessoa))
            generos.push(generoPessoa);
    });

    generos.forEach(
        gender => {
            let qtd = relatos.reduce( (accumulator, current) => {
                return accumulator + (current.generoPessoa === gender ? 1 : 0)
            }, 0);

            qtdPorGeneros.push(qtd);
        }
    );

    //retorno = {generos, qtdPorGeneros} ;
    return valueFormat('Genero', generos, qtdPorGeneros, 0, 10);
}


const distribuicaoPorCidadeTabela = (relatos) =>{
    console.log('distribuicaoPorCidadeTabela', relatos);
    if(relatos){
            
        console.log(relatos)
        let uf_cidade = [];
        relatos.foreach(({ufRelato, cidadeRelato}) => {
            console.log('Entrou nos relatos')
            uf_cidade.forEach( item => {
                console.log('entrou nos ufs')
                if(item.uf === ufRelato && item.cidade === cidadeRelato)
                    return;
                else
                    uf_cidade.push({uf: ufRelato, cidade: cidadeRelato});
            });
        });

        console.log(uf_cidade);
    }

    const heaters = ['UF', 'Cidade', 'Quantidade de Relatos',];
    const rows = [
        {index: 1, datas: ['SP', 'São Paulo', 6]},
        {index: 2, datas: ['MG', 'Belo Horizonte', 9]},
        {index: 3, datas: ['ES', 'Vitoria', 16]},
        {index: 4, datas: ['MG', 'Santa Luzia', 3]},
        {index: 5, datas: ['SP', 'Macae', 16]},
      ]
      return {heaters, rows};
}

const QtdRelatos = (relatos) => relatos.length;

const QtdAgressoesFisicas = (relatos) => relatos.reduce( (acc, cont) => {
        acc += cont.agressaoFisica ? 1 : 0;
        return acc;
    }, 0 );



export {faixaEtaria, distribuicaoGeneros, distribuicaoGenerosService, distribuicaoPorCidadeTabela, QtdRelatos, QtdAgressoesFisicas }