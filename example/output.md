# World Music API API documentation version v1
http://example.api.com/v1
---

## /songs

#### get: 

##### Parameters
| Parameter     | Description   | Type |
| ------------- | ------------- | ---- |
| genre | filter the songs by genre | string |



###### Response(s)


#### post: 


###### Response(s)



###/{songId}

#### get: 
###### Response(s)

200

type: application/json

``` 
{ "$schema": "http://json-schema.org/schema",
  "type": "object",
  "description": "A canonical song",
  "properties": {
    "title":  { "type": "string" },
    "artist": { "type": "string" }
  },
  "required": [ "title", "artist" ]
}

```

type: application/xml

``` 

```



#### delete: This method will *delete* an **individual song**

###### Response(s)




## /users

#### get: 


###### Response(s)




