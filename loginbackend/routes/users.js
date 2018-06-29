var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'pass123',
	database: 'users'

});


router.post('/', function(req, res, next) {
  var comp= req.body.comp;
  console.log(comp);

  if (comp==='login'){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("SELECT * FROM user WHERE username = ? AND  password = ?",
    [username, password], function (err, row, field){

      if (err) {
        console.log(err);
        res.send({ 'success': false, 'message': 'Could not connect to db'});
      }

      if (row.length >0){
        console.log('if part');
        console.log(row);
        res.send ({ 'success': true, 'user': row[0].username});
      } else {
        console.log('else');
        res.send ({ 'success': true, 'message': 'User not found'});
      }


    });
  } else{
    var First_name = req.body.First_name;
    var password = req.body.password;
    var Andrew_ID= req.body.Andrew_ID;

    connection.query("INSERT INTO user (id, username, password,Andrew_ID) VALUES (NULL, ?, ?, ?);",
    [First_name, password,Andrew_ID], function (err, row, field){

      console.log(First_name);
      console.log(password);
      
      if (err) {
        console.log(err);
        res.send({ 'success': false, 'message': 'Could not connect to db'});
      }

      if (row.length >0){
        console.log('if part');
        console.log(row);
        res.send ({ 'success': true, 'user': row[0].username});
      } else {
        console.log('else');
        res.send ({ 'success': true, 'message': 'User not found'});
      }


    });
  }
  
});

module.exports = router;
