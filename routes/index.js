var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '123456'});
/* GET home page. */
router.post('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    connection.connect();
    connection.query('SELECT * FROM a.class', function (err, rows, fields) {
        res.send(rows)
    });
    connection.end();
});
module.exports = router;
