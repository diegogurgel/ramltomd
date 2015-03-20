# {{title}} API documentation{%if version%} version {{version}}{%endif%}
{{baseUri}}

---

{% for resource in resources %}
## {{resource.relativeUri}}

{% for method in resources[0].methods %}
#### {{ method.method }}: {{method.description}}
{% for bodyKey,value in method.body%}
Request type:{{bodyKey}}
``` 
{{method.body[bodyKey].schema}}
```
{% endfor %}
##### Respostas

{% for httpCode,value in method.responses %}
{{httpCode}}
{% for bodyKey,value in method.responses[httpCode].body%}
Response type:{{bodyKey}}
``` 
{{method.responses[httpCode].body[bodyKey].schema}}
``` 
{% endfor %}
{% endfor %}
{% endfor %}
{% endfor %}