import { Parser } from 'json2csv';

const downloadCsv = async(relato) =>{

    try{           
        const fields = [
            'nomePessoa',
            'idadePessoa',
            'racaPessoa',
            'generoPessoa',
            'dataRelato',
            'localRelato',
            'ufRelato',
            'cidadeRelato',
            'agressaoFisica',
            'aconteceuComigo'
        ];
        const opts = {fields};

        const parser = new Parser(opts);
        const csv = parser.parse(relato);
        return csv;

    }catch(err){
        console.log(err);
        throw err;
    }
   
}

export {downloadCsv}