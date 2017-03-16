# F8 Tracking

## Build Setup

``` bash
# install dependencies
npm install

# rebuilds on changes
npm run dev

# builds project with minification also builds for browser - url to be specifed for where to send requests
npm run build -- url

# run unit test
npm run unit
```

## Classes

<dl>
<dt><a href="#Fresh8Tracking">Fresh8Tracking</a></dt>
<dd><p>Fresh8Tracking class holds 1 function which validates and sends data</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#sendRequest">sendRequest(data)</a> ⇒ <code>*</code> | <code>Promise.&lt;TResult&gt;</code></dt>
<dd><p>makes the request to the server using fetch</p>
</dd>
<dt><a href="#checkStatusCode">checkStatusCode(response)</a> ⇒ <code>Promise.reject</code> | <code>Object</code></dt>
<dd><p>Checks the stats code on a response and rejects the promise chain if
less than 200 or greater than 300.</p>
</dd>
<dt><a href="#validateFields">validateFields(data)</a> ⇒ <code>Error</code> | <code>boolean</code></dt>
<dd><p>validates data fields to only be the fields in the validFields array
validates data fields to have to include the fields in requiredFields array
returns an error if validation doesn&#39;t pass, else returns true</p>
</dd>
<dt><a href="#validateBets">validateBets(data)</a> ⇒ <code>Error</code> | <code>boolean</code></dt>
<dd><p>validates the bets property of the attribute to be an array and be formatted correctly
returns an error if validation doesn&#39;t pass, else returns true</p>
</dd>
</dl>

<a name="Fresh8Tracking"></a>

## Fresh8Tracking
Fresh8Tracking class holds 1 function which validates and sends data

**Kind**: global class  
<a name="Fresh8Tracking+emitEvent"></a>

### fresh8Tracking.emitEvent(data, callback) ⇒
runs data through validation and and returns then runs sendRequest in a callback to send the data

**Kind**: instance method of <code>[Fresh8Tracking](#Fresh8Tracking)</code>  
**Returns**: returns the callback containing an error if data does
not validate or sendRequest if everything does validate  

| Param | Description |
| --- | --- |
| data | data to be validated and sent |
| callback |  |

<a name="sendRequest"></a>

## sendRequest(data) ⇒ <code>\*</code> &#124; <code>Promise.&lt;TResult&gt;</code>
makes the request to the server using fetch

**Kind**: global function  

| Param | Description |
| --- | --- |
| data | to be sent |

<a name="checkStatusCode"></a>

## checkStatusCode(response) ⇒ <code>Promise.reject</code> &#124; <code>Object</code>
Checks the stats code on a response and rejects the promise chain if
less than 200 or greater than 300.

**Kind**: global function  
**Returns**: <code>Promise.reject</code> &#124; <code>Object</code> - a rejected promise or the reponse object  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | is the fetch response object |

<a name="validateFields"></a>

## validateFields(data) ⇒ <code>Error</code> &#124; <code>boolean</code>
validates data fields to only be the fields in the validFields array
validates data fields to have to include the fields in requiredFields array
returns an error if validation doesn't pass, else returns true

**Kind**: global function  
**Returns**: <code>Error</code> &#124; <code>boolean</code> - returns an Error if fields do not validate and true if they do  

| Param |
| --- |
| data | 

<a name="validateBets"></a>

## validateBets(data) ⇒ <code>Error</code> &#124; <code>boolean</code>
validates the bets property of the attribute to be an array and be formatted correctly
returns an error if validation doesn't pass, else returns true

**Kind**: global function  
**Returns**: <code>Error</code> &#124; <code>boolean</code> - returns an Error if bets do not validate and true if they do  

| Param |
| --- |
| data | 
