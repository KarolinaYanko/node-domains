var fs = require('fs');
var redis = require('redis').createClient(); // or anotherDB

module.exports = function handler(req, res){
	if(req.url == '/'){
		/*fs.readFile('no-file', function(err, content){
			if (err) throw err;

			res.end(content);
		});*/
		redis.get('data', function(err, data){
		// ...
		throw new Error('redis callback');
		});
	} else{
		res.statusCode = 404;
		res.end("Not Found");
	}
}