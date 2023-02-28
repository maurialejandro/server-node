const exptress = require('express')
const app = express()

app.get('/', function(req, res){
	res.send('hello')
})

app.list(3030)
