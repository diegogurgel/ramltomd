#!/usr/bin/env node
var nunjuncks = require('nunjucks');
var raml2obj = require('raml2obj');
var path  = require('path');
var fs = require('fs');
var commander = require('commander');




//console.log(require.main === module);


commander
	.version('0.0.1')
	.option('-i, --input [path]','path for raml file')
	.parse(process.argv);

var input = commander.input;
if(input){
	var origin = path.resolve(commander.input);
	render(origin);
}else{
	commander.help();
}

function render (origin) {
	if(origin!=''){
		raml2obj.parse(origin).then(function(obj){
			console.log(JSON.stringify(obj));
			obj.resources.forEach(function(resource){
				resource.methods.forEach(function(method){				
					method.method = method.method.toUpperCase(); 
				});
			}, this);
			fs.readFile(__dirname+'/default.md','utf-8', function(err,data){
				if(err){
					console.log(err);
				}else{
					var result = nunjuncks.renderString(data,obj);	
					console.log(result);
				}
			});
		});
	}
}




