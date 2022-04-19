var express = require('express');
var router = express.Router();
var db_conn = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Consulta SQL.
  var sql = 'SELECT * FROM category LIMIT 10';
  db_conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', { title: 'E-shop', data: data});
  });
});

module.exports = router;
