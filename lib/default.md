# {{title}} API documentation{%if version%} version {{version}}{%endif%}
{{baseUri}}
---
{% for resource in resources %}
## {{resource.relativeUri}}
{% for method in resource.methods %}
#### {{ method.method }}: {{method.description}}
{% if method.queryParameters %}
##### Parameters
| Parameter     | Description   | Type |
| ------------- | ------------- | ---- |
{% for parameter,objParameter in method.queryParameters%}| {{parameter}} | {{objParameter.description}} | {{objParameter.type}} |
{% endfor %}
{% endif %}
{% for bodyKey,value in method.body%}
Request type:{{bodyKey}}
``` 
{{method.body[bodyKey].schema}}
```
{% endfor %}
###### Response(s)
{% for httpCode,value in method.responses %}
{{httpCode}}
{% for bodyKey,value in method.responses[httpCode].body%}
type:{{bodyKey}}
``` 
{{method.responses[httpCode].body[bodyKey].schema}}
``` 
{% endfor %}
{% endfor %}
{% endfor %}
{% for resource in resource.resources%}
###{{resource.relativeUri}}
{% for method in resource.methods %}
#### {{ method.method }}: {{method.description}}
###### Response(s)
{% for responsesKey,value in method.responses %}
{{responsesKey}}
{% for bodyKeyResp,value in method.responses[responsesKey].body%}
type: {{bodyKeyResp}}

``` 
{{method.responses[responsesKey].body[bodyKeyResp].schema}}
```
{% endfor %}
{% endfor %}
{% endfor %}
{% endfor %}
{% endfor %}