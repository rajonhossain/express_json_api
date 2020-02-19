var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser')
var connection = require('../dbconnect');

 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/learners' , (req, res) => {
	// console.log('conn=',connection);
	connection.query('SELECT * FROM react_table', (err, rows, fields) => {

		console.log(rows);

		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

module.exports = router;
