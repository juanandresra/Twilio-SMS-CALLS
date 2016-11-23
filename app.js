
var twilio = require('twilio');
var client = new twilio.RestClient('AC89e921401498e394eba6c92d0b57f8dd', '8cb168dafe084a1fda2ced53293313fa');
var express = require('express');
var xml = require('xml');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const port = 8080; 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/urlmessage',urlencodedParser,function(req,res,next){
	var Response = 
	[
		{ Response: 
			[ 
				{ pause: [ {_attr: { length: '3'}}] }, 
				{ Say: [ {_attr: { voice: 'alice',language:'es-MX' , loop:2}} , req.query.msg ] }
				
			] 
		}
	];
	res.set('Content-Type', 'text/xml');
	res.send(xml(Response));
});


app.post('/call',urlencodedParser,function(req, res, next){
	var encoded_url = encodeURI("http://127.0.0.0:"+port+"/urlmessage?msg="+req.body.msg);
	client.calls.create({
	    url: encoded_url,
	    to: req.body.num,
	    from: "+12015904082"
		}, function(err, call) {
		    if (!err) {
	    	res.send(call);
		    } else {
		    	res.send(err);
		    }
	});
	
});


app.post('/sms',urlencodedParser,function(req, res, next){
	console.log("SMS "+ req.body.num + " - " + req.body.msg);
	client.sms.messages.create({
	    to: req.body.num,
	    from:'+12015904082',
	    body: req.body.msg
	}, function(error, message) {
	    if (!error) {
	    	res.send(message.sid + " " + "mensaje enviado : " +message.dateCreated);
	    } else {
	    	res.send('Oops! ocurrio un error.');
	    }
	});
})


app.listen(port,function(){
	console.log("El servidor arranco en el puerto "+port);
})
