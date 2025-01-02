var express = require('express');
var router = express.Router();
var GaleriaModel = require('../model/galeria/GaleriaModel.js');
var RespostaClass = require('../model/RespostaClass.js');

router.get("/", function(req, resp, next){
    GaleriaModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro.";
            console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }        
        resp.json(resposta);
    });
});

module.exports = router;