import  * as service from './ServiceRelato';
import {faixaEtarias} from '../Help/Dominios'
import * as complemento from './ServiceComplementos'

//Exemplo
const valueFormat = (label, labels, data, min, max) => {
    return {label: label,
        labels: labels,
        data: data,
        min: min,
        max: max,
    }
}

const valueFormat2 = (tiltle, data, min, max) => {
    return {label: tiltle,
        labels: data.map(item => item.label),
        data: data.map(item => item.value),
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

const distribuicaoGeneros = async (relatos) =>{
    
    const generosRef = await complemento.RecuperaGeneros();
    const qtdPorGeneros = [];

    /*
    relatos.forEach(({generoPessoa}) => {
        if(!generos.includes(generoPessoa))
            generos.push(generoPessoa);
    });
    */
   const genero = generosRef.map( gen => gen.Texto)
    generosRef.forEach(
        gender => {
            let qtd = relatos.reduce( (accumulator, current) => {
                return accumulator + (current.generoPessoa === gender.ID_REF ? 1 : 0)
            }, 0);

            qtdPorGeneros.push(qtd);
        }
    );

    //retorno = {generos, qtdPorGeneros} ;
    return valueFormat('Genero', genero, qtdPorGeneros, 0, 10);
}

const distribuicaoLocais = async (relatos) =>{
    
    const locaisRef = await complemento.RecuperaLocal();
    let qtdPorLocal = [];



    
   locaisRef.forEach(
        local => {
            let qtd = relatos.reduce( (accumulator, current) => {
                return accumulator + (current.localRelato === local.ID ? 1 : 0)
            }, 0);
            qtdPorLocal.push({label: local.Texto, value: qtd});
        }
    );

    //Locais.push('Outros')
    //qtdPorLocal.push(relatos.length - Calculado)
    //retorno = {generos, qtdPorGeneros} ;
    //return valueFormat('Locais', Locais, qtdPorLocal, 0, 10);
   
    qtdPorLocal = qtdPorLocal.sort((a, b) => b.value - a.value)
    
    let qtdPorLocalReduzida = qtdPorLocal.slice(0, 5)
    const qtdOutros = qtdPorLocal.slice(5).reduce((acc, cur) => acc + cur.value, 0)
    const outs = {label: 'Outros', value: qtdOutros}
    
    qtdPorLocalReduzida.push(outs)
    return valueFormat2('Locais', qtdPorLocalReduzida, 0, 10)

}

const distribuicaoPorCidadeTabela = (relatos) =>{
    
    const Ufs_Cidades = relatos.map( item => {return {uf: item.ufRelato, cidade: item.cidadeRelato}})
    let uf_cidade = [];
    Ufs_Cidades.forEach(({uf, cidade}) => {
        if(!uf_cidade.find(item => item.uf === uf && item.cidade === cidade ))
            uf_cidade.push({uf: uf, cidade: cidade});
    });

    let valor = []
   

    uf_cidade.forEach(item => {
        let qtdRelatos = 0
        let qtdAgressoesFisicas = 0
        let qtdCasosPoliciais = 0

        relatos.forEach( rel => {
            if(rel.ufRelato === item.uf && rel.cidadeRelato === item.cidade){
                qtdRelatos++
                if(rel.agressaoFisica)
                    qtdAgressoesFisicas++
                if(rel.casoPolicial) 
                    qtdCasosPoliciais++
            }
        })

        const modelo = {
            uf: item.uf,
            cidade:item.cidade,
            TotalRegistros: qtdRelatos,
            AgresãoFisica: qtdAgressoesFisicas,
            CasosPoliciais: qtdCasosPoliciais
        }

        valor.push(modelo)
    })

    valor.sort( (a, b) => b.TotalRegistros - a.TotalRegistros)
    valor = valor.map((item, index) => {return {...item, position: index+1}})

    return valor;

}

/**
 * 
 * @param {*} relatos 
 * @returns 
 */
const QtdRelatos = (relatos) => relatos.length;

const QtdAgressoesFisicas = (relatos) => relatos.reduce( (acc, cont) => acc += cont.agressaoFisica ? 1 : 0, 0 );
/**
 * 
 * @param {*} relatos 
 * @returns valor de 
 */
const QtdCasosPoliciais = (relatos) => relatos.reduce( (acc, cont) => acc += cont.casoPolicial ? 1 : 0, 0 );


export {faixaEtaria, distribuicaoGeneros, distribuicaoGenerosService, distribuicaoPorCidadeTabela, QtdRelatos, QtdAgressoesFisicas, distribuicaoLocais, QtdCasosPoliciais }