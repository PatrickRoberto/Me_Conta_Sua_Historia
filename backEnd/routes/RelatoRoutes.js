const express = require('express');
const RelatosnRouter = express.Router();
const RelatosServices = require('../services/RelatoService.js');

const SUCESSO_BUSCA = {"Mensage": "Objeto Encontrados"}
const SUCESSO_MODIFICACAO = {"Mensage": "Objeto Modificados"}
const SUCESSO_INSERCAO = {"Mensage": "Objeto Inseridos"}
const FALHA_BUSCA = {"Mensage": "Objeto não Encontrado"}
const OUTROS_ERROS = {"Mensage": "Erros na busca da informação"}


RelatosnRouter.get('/', async (_, resp)=>{
    try {
        resp.send(
            {
                message:'Nessa rota esta as funcionalidades referentes aos realatos',
            });
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA});
    }
    
});


RelatosnRouter.get('/relatos', async (req, resp)=>{
    try {
        const data = await RelatosServices.todosRelatos();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});


RelatosnRouter.post('/cadastro', async (req, resp)=>{
    try {

        const relato = req.body;
        const data = await RelatosServices.CadastrarRelato(relato);
        
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

RelatosnRouter.get('/relatosporgenero', async (req, resp)=>{
    try {
        const data = await RelatosServices.resumoRelatosPorGenero();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

RelatosnRouter.get('/download', async (req, resp)=>{
    try {
        const data = await RelatosServices.downloadCsv();
        resp.header('Content-Type', 'text/csv');
        resp.attachment('Me_conta_sua_historia.csv');
        resp.send(data);
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});

module.exports = RelatosnRouter;
