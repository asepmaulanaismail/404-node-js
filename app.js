/*
 * Main App file App.js
 * @author Asep Maulana Ismail
 * @title 404 routing in node js
 * @website asepmaulanaismail.com
 */
 
var express = require('express'),
	app = express();
	
app.listen(8080);
console.log('i am listening on port 8080');
app.get('/', function(req,res){
	res.end('Hello, World!');
});

// routing ke halaman apapun yang tidak didefinisikan
app.get('*', function(req,res){
	res.end('Sorry, this page is not found.');
});