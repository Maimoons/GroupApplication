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
  var username = req.body.username;
  var password = req.body.password;

  connection.query(
  	"INSERT INTO 'user' ('id', 'username', 'password') VALUES (NULL, ?, ?);",
  	[username, password], function (err, row, field){

      console.log(username);
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
});

module.exports = router;
