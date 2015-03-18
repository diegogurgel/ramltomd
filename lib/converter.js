var nunjuncks = require('nunjucks');
var raml2obj = require('raml2obj');



raml2obj.parse('../example/api.raml').then(function(obj){
	
	obj.resources.forEach(function(resource){

		resource.methods.forEach(function(method){
			
			method.method = method.method.toUpperCase(); 
		});
	}, this);
	
	console.log('\n');
	var rendered = nunjuncks.render('templates/default.md',obj);
	console.log(rendered);


});



