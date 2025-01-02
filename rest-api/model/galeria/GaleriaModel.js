const db = require('../..//banco/dbConexao.js');

class GaleriaModel {

    static getTodos(callback){
        return db.query("SELECT * FROM tb_galeria", callback);
    }
}