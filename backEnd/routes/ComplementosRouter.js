const express = require('express');
const ComplementosRouter = express.Router();
const ComplementosServices = require('../services/ComplementoServices.js');

const SUCESSO_BUSCA = {"Mensage": "Objeto Encontrados"}
const SUCESSO_MODIFICACAO = {"Mensage": "Objeto Modificados"}
const SUCESSO_INSERCAO = {"Mensage": "Objeto Inseridos"}
const FALHA_BUSCA = {"Mensage": "Objeto não Encontrado"}
const OUTROS_ERROS = {"Mensage": "Erros na busca da informação"}


ComplementosRouter.get('/', async (_, resp)=>{
    try {
        resp.send(
            {
                message:'Nessa rota esta as funcionalidades referentes aos complementos',
            });
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA});
    }
    
});

ComplementosRouter.get('/dominios', async (req, resp)=>{
    try {
        const data = await ComplementosServices.BuscaDominios();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

ComplementosRouter.get('/genero', async (req, resp)=>{
    try {
        const data = await ComplementosServices.BuscaLista({ID_LISTA: 'Genero'});
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

ComplementosRouter.get('/etnia', async (req, resp)=>{
    try {
        const data = await ComplementosServices.BuscaLista({ID_LISTA: 'Etnia'});
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

ComplementosRouter.get('/local', async (req, resp)=>{
    try {
    
        const data = await ComplementosServices.BuscaLocais();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

ComplementosRouter.get('/cidade', async (req, resp)=>{
    try {
        const {uf} = req.query;
        const data = await ComplementosServices.BuscaCidade(uf);
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

ComplementosRouter.get('/nomes', async (req, resp)=>{
    try {
        const {nome} = req.query;
        const data = await ComplementosServices.BuscaNomes();
        const nomeInNomes = data.filter( item)
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

module.exports = ComplementosRouter;
