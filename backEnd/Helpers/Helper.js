
//const nomes = ['ALINE', 'ROGERIO', 'PATRICK'];

function retira_acentos(str) 
{

    const com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    const sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    
    let novastr="";
    for(i=0; i<str.length; i++) {
        let troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
} 


const removerNome = async (texto, nomes) =>{

    let palavras = texto.split(' ');

    const X = 'X'
    palavras = await palavras.map( palavra =>{
        let temVirgula = palavra[palavra.length-1] === ',';
        if(temVirgula) 
            palavra = palavra.substr(0, palavra.length - 1)
        if(nomes.includes(retira_acentos(palavra.toUpperCase())))
            return `${X.repeat(palavra.length)}${temVirgula? ',': ''}`;
        else
            return `${palavra}${temVirgula? ',': ''}`;;

    })

    return palavras.join(' ');
}

module.exports = {removerNome};