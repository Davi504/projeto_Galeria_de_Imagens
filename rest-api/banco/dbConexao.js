const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    dabatase: 'db_galeria'
});