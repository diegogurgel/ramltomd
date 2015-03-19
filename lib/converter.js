#!/usr/bin/env node

var nunjuncks = require('nunjucks');
var raml2obj = require('raml2obj');
var path  = require('path');

var origin = path.resolve(process.argv[2]);

if(origin!=''){
	raml2obj.parse(origin).then(function(obj){
		obj.resources.forEach(function(resource){
			resource.methods.forEach(function(method){				
				method.method = method.method.toUpperCase(); 
			});
		}, this);		
		var result = nunjuncks.render('./templates/default.md',obj);
		console.log(result);
	});

}




