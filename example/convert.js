var ramlToMd = require('../lib/ramltomd.js');


ramlToMd.render('api.raml').then(function(result){
	console.log(result);
});