/**
 * This file bootstraps the application
 */
 
import express = require('express');
 
var app = express();

app.get('/', (request: express.Request, response: express.Response) => {
	response.send('Hello World!');
});

var server = app.listen(3000, () => {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('App listening on port %s', port);
});