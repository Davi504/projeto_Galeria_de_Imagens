const db = require('../..//banco/dbConexao.js');

module.exports = class GaleriaModel {

    static getTodos(callback){
        return db.query("SELECT * FROM tb_galeria", callback);
    }
}