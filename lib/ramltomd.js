#!/usr/bin/env node
var nunjuncks = require('nunjucks');
var raml2obj = require('raml2obj');
var path  = require('path');
var fs = require('fs');
var commander = require('commander');
var Q = require('q');




//console.log(require.main === module);


if(require.main===module){
	commander
	.version('0.0.7')
	.usage('[options]')
	.option('-i, --input [path]','path for raml file')
	.parse(process.argv);

	var input = commander.input;
	if(input){
		var origin = path.resolve(commander.input);
		render(origin).then(function(result){
			console.log(result);
		});
	}else{
		commander.help();
	}
}

function render (origin) {
	if(origin!=''){
		return raml2obj.parse(origin).then(function(obj){
			console.log(JSON.stringify(obj));
			obj.resources.forEach(function(resource){
				resource.methods.forEach(function(method){				
					//method.method = method.method.toUpperCase(); 
				});
			}, this);
			var data = fs.readFileSync(__dirname+'/default.md','utf-8');
			return Q.fcall(function(){
				var result = nunjuncks.renderString(data,obj);	
				return result;
			});

				
			
		});
	}
}
module.exports.render = render;




