var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser')
var connection = require('../dbconnect');
var cors = require('cors');
var bodyParser = require('body-parser')

 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/output2', function(req, res){
    var name = req.body.name;
    var fname = req.body.fname;
    var mname = req.body.mname;

    console.log(name,fname,mname)

    // console.log("......." + name);

    var sql = "INSERT INTO react_table (name, fname, mname) VALUES(\""+name+"\",\""+fname+"\",\""+mname+"\")";
  	connection.query(sql, function (err, result) {
    	res.send({id:result.insertId,name:name,fname:fname,mname:mname});
	});
});

router.get('/learners', cors(), function (req, res, next) {
	connection.query('SELECT * FROM react_table', (err, rows, fields) => {
	if (!err){
			 res.send(rows);
		}
	});
});



module.exports = router;
