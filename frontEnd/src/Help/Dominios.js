//import  * as dominios from '../Service/ServiceComplementos' 


const estados = [
    {sigla: 'AC', nome: 'Acre'},
    {sigla: 'AL', nome: ' Alagoas'},
    {sigla: 'AP', nome: ' Amapá'},
    {sigla: 'AM', nome: ' Amazonas'},
    {sigla: 'BA', nome: ' Bahia'},
    {sigla: 'CE', nome: ' Ceará'},
    {sigla: 'DF', nome: ' Distrito Federal'},
    {sigla: 'ES', nome: ' Espírito Santo'},
    {sigla: 'GO', nome: ' Goiás'},
    {sigla: 'MA', nome: ' Maranhão'},
    {sigla: 'MT', nome: ' Mato Grosso'},
    {sigla: 'MS', nome: ' Mato Grosso do Sul'},
    {sigla: 'MG', nome: ' Minas Gerais'},
    {sigla: 'PA', nome: ' Pará'},
    {sigla: 'PB', nome: ' Paraíba '},
    {sigla: 'PR', nome: ' Paraná'},
    {sigla: 'PE', nome: ' Pernambuco'},
    {sigla: 'PI', nome: ' Piauí'},
    {sigla: 'RJ', nome: ' Rio de Janeiro'},
    {sigla: 'RN', nome: ' Rio Grande do Norte'},
    {sigla: 'RS', nome: ' Rio Grande do Sul '},
    {sigla: 'RO', nome: ' Rondônia'},
    {sigla: 'RR', nome: ' Roraima'},
    {sigla: 'SC', nome: ' Santa Catarina '},
    {sigla: 'SP', nome: ' São Paulo '},
    {sigla: 'SE', nome: ' Sergipe'},
    {sigla: 'TO', nome: ' Tocantins'},
];


const racas =  [
        'Preta',  
        'Parda',
        'Amarela',
        'Branca',
        'Indigina',
    ];



const generos = [
    {ID_REF:'F', TEXTO: 'Feminino'},
    {ID_REF:'M', TEXTO: 'Masculino'},
    {ID_REF:'O', TEXTO: 'Outro'},
    {ID_REF:'N', TEXTO: 'Prefiro não definir'}
];

const faixaEtarias = [
    {faixa: 'menos de 18 anos', min: 0, max: 18 },
    {faixa: 'de 18 a 25 anos', min: 18, max: 26 },
    {faixa: 'de 26 a 35 anos', min: 26, max: 36 },
    {faixa: 'de 36 a 45 anos', min: 36, max: 46 },
    {faixa: 'de 45 a 60 anos', min: 46, max: 61 },
    {faixa: 'acima de 60 anos', min: 61, max: 200 },
]



const meses = [
    { mes: 'janeiro', maxDias: 31} , 
    { mes: 'fevereiro', maxDias: 28} , 
    { mes: 'março', maxDias: 31} , 
    { mes: 'abril', maxDias: 30} , 
    { mes: 'maio', maxDias: 31} , 
    { mes: 'junho', maxDias: 30} , 
    { mes: 'julho', maxDias: 31} , 
    { mes: 'agosto', maxDias: 31} , 
    { mes: 'setembro', maxDias: 30} , 
    { mes: 'outubro', maxDias: 31} , 
    { mes: 'novembro', maxDias: 30} , 
    { mes: 'dezembro', maxDias: 31} , 

]


export {racas, generos, estados, faixaEtarias, meses};