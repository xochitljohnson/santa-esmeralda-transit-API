# Request and response format
_Copied from Todoist docs_ 

API endpoints accept arguments either as url-encoded values for non-POST requests or as json-encoded objects encoded in POST request body with a Content-Type: `application/json header.`

POST requests may provide an additional X-Request-Id HTTP header containing a unique string to ensure modifications apply only once. Requests having the same ID as a previously processed request will be discarded.

This API relies on standard HTTP response codes to indicate operation result. The table below is a simple reference about the most used status codes:

Status code	Description:

- 200	The request was processed successfully.
- 204	The request was processed successfully without any data to return.
- 4xx	The request was processed with an error. The request was invalid and should not be retried unmodified.
- 5xx	The request failed due to a server error, it's safe to retry later.

All 200 OK responses have the Content-type: application/json and contain a JSON-encoded representation of one or more objects.

---

$ curl -X GET  http://localhost:3000/api/v1/transit-routes 
$ curl -X GET  http://localhost:3000/api/v1/transit-routes/:id 

[
    {
        "metadata" : {
            "creator_id": "2671355",
            "created_at": "2009-12-11T22:36:50.000000Z",
         }
        "name": "Blue Line",
        "description": "A downtown commuter line that runs east to west.",
        "schedule": ["commuter, standard, weekend, holiday"] 
        "id": "2995104339",
        "stops": [..stops],
        "current_location" : {
            "coords": "0,0",
            timestamp: "2009-12-11T22:36:50.000000Z"
        }
    }...
]


$ curl "http://localhost:3000/api/v1/transit-routes" -X POST 
    --data : '{
        "name": "Green Line", 
        "description": "Coastal line north to south with hub at Main Hall", 
        "schedule": ["commuter, standard, weekend"]
        }' 
    
    -H "Content-Type: application/json" \ "X-Request-Id: $(uuidgen)" \"Authorization: Bearer $token

$ curl "http://localhost:3000/api/v1/transit-routes" -X PUT 
 --data : '{
        "id": "2829812", 
        "name": "Coastal line north to south with hub at Main Hall", 
        "schedule": ["commuter, standard, weekend"],
        "stops": [],
        }' 
    
    -H "Content-Type: application/json" \ "X-Request-Id: $(uuidgen)" \"Authorization: Bearer $token
