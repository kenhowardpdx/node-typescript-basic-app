/**
 * This file bootstraps the application
 */
 
import express = require('express');
import c = require('nconf');
 
var app = express();

// Load configuration file
c.argv().env().file({ file: './app/config.json' });

app.get('/', (request: express.Request, response: express.Response) => {
	response.send(c.get('GREETING'));
});

var server = app.listen(process.env.port || 3000 , () => {
	var port = server.address().port;
	
	console.log('App listening on port %s', port);
});