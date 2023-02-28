const express = require('express')
const app = express()

app.get('/', function(req, res){
	res.sendFile( __dirname + '/public/holla/index.html')
})

app.get('/', function(req, res){
	res.sendFile( __dirname + '/public/holla/index.html')
})

app.get('*', function(req, res){
	res.sendFile( __dirname + '/public/not-found/index.html')
})

app.listen(3030)
