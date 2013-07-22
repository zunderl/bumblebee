var express = require('express');
var fs=require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
var data ;
try {
	data = fs.readFileSync('index.html') ;
} catch (e){
	if (e instanceof Error)
	{
		if (e.code == 'ENOENT')
		{
		  response.send('File not found') ;
			
		}
		else
		{
			throw e;
		}
	}

}
response.send(data.toString());

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
