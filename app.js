var express = require('express')
var app= express()
var bodyParser = require('body-parser')

app.listen(3000,function(){
		console.log("start! express server on port 3000")
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',function(req,res){
	
	res.sendFile(__dirname + "/public/main.html")
})




app.post('/ajax_send_email',function(req,res){
		console.log(req.body.email)
		var responseData = {'result': 'ok', 'email':req.body.email}
		res.json(responseData)
})