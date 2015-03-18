# {{title}} API documentation{%if version%} version {{version}}{%endif%}
{{baseUri}}

---

{% for resource in resources %}
## {{resource.relativeUri}}

{% for method in resources[0].methods %}
#### {{ method.method }}: {{method.description}}

```javascript 
{{method.body['application/json'].schema}}
```

##### Respostas

{% for httpCode,value in method.responses %}
{{httpCode}}
```javascript 

{{method.responses[httpCode].body['application/json'].schema}}
``` 
{% endfor %}
{% endfor %}
{% endfor %}




