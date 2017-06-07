# F8 Tracking
[ ![Codeship Status for ConnectedVentures/tracking.js](https://app.codeship.com/projects/de1ca920-16df-0135-d824-1690a82d9f8e/status?branch=master)](https://app.codeship.com/projects/218359)

## Getting Started


## Using Bundled ES5

The project is pre bundled and transpiled using webpack and babel, into the dist folder where there is an uncompressed and uglified version of the Fresh8Tracking.js library.

Its formatted as a commonjs2 module. Use with your own bundler like so in es5:

```js
var Fresh8Tracking = require('Fresh8Tracking').Fresh8Tracking;
```

## Using Browser Version

The project is also pre bundled as a browser.js file to be used in the browser where the Fresh8Tracking class has been bound to the window. with this script you should be able to access window.Fresh8Tracking

## Using ES6

you will need to ensure your babel configuration includes:

```
{
"presets": ["es2015", "stage-2"],
"plugins": ["transform-es2015-function-name"]
}
```
Assuming you have a bundler and transpiler configured correctly.

```es6
import { Fresh8Tracking } from 'Fresh8Tracking/src';
```

will load the Fresh8Tracking class

## Using Fresh8Tracking example
```es6
import Fresh8Tracking from 'Fresh8Tracking';
const fresh8Tracking = new Fresh8Tracking;

fresh8Tracking.emitEvent(data, () => {})
```

## Contributing and Developing

Ensure node 6 LTS is installed. Then.

```
npm install
```

### Testing
- Running unit tests, and check code coverage: `npm test`
- Open the code coverage report: `npm run cov`

### Scripts
Use these scripts using `npm run ...`:
- `unit`: Run the unit tests once
- `build -- url`: Compiles the code to ES5 in the dist folder also adds a browser version, and builds readme.md. Can pass this a `url` for the built version to use a different URL. `url` defaults to `https://heimdall.fresh8.co`
- `docs`: Rebuild this README.md
- `dev`: Compiles the code to ES5, and runs unit tests whilst watching for changes

# API

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
<dt><a href="#shouldContainBets">shouldContainBets(data)</a> ⇒ <code>boolean</code></dt>
<dd><p>checks to see if the data should contain bets or not</p>
</dd>
</dl>

<a name="Fresh8Tracking"></a>

## Fresh8Tracking
Fresh8Tracking class holds 1 function which validates and sends data

**Kind**: global class  
<a name="Fresh8Tracking+emitEvent"></a>

### fresh8Tracking.emitEvent(data, callback) ⇒
runs data through validation and and returns then runs sendRequest in a callback to send the data

**Kind**: instance method of [<code>Fresh8Tracking</code>](#Fresh8Tracking)  
**Returns**: returns the callback containing an error if data does
not validate or sendRequest if everything does validate  

| Param | Description |
| --- | --- |
| data | data to be validated and sent |
| callback |  |

<a name="sendRequest"></a>

## sendRequest(data) ⇒ <code>\*</code> \| <code>Promise.&lt;TResult&gt;</code>
makes the request to the server using fetch

**Kind**: global function  

| Param | Description |
| --- | --- |
| data | to be sent |

<a name="checkStatusCode"></a>

## checkStatusCode(response) ⇒ <code>Promise.reject</code> \| <code>Object</code>
Checks the stats code on a response and rejects the promise chain if
less than 200 or greater than 300.

**Kind**: global function  
**Returns**: <code>Promise.reject</code> \| <code>Object</code> - a rejected promise or the reponse object  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | is the fetch response object |

<a name="validateFields"></a>

## validateFields(data) ⇒ <code>Error</code> \| <code>boolean</code>
validates data fields to only be the fields in the validFields array
validates data fields to have to include the fields in requiredFields array
returns an error if validation doesn't pass, else returns true

**Kind**: global function  
**Returns**: <code>Error</code> \| <code>boolean</code> - returns an Error if fields do not validate and true if they do  

| Param |
| --- |
| data | 

<a name="validateBets"></a>

## validateBets(data) ⇒ <code>Error</code> \| <code>boolean</code>
validates the bets property of the attribute to be an array and be formatted correctly
returns an error if validation doesn't pass, else returns true

**Kind**: global function  
**Returns**: <code>Error</code> \| <code>boolean</code> - returns an Error if bets do not validate and true if they do  

| Param |
| --- |
| data | 

<a name="shouldContainBets"></a>

## shouldContainBets(data) ⇒ <code>boolean</code>
checks to see if the data should contain bets or not

**Kind**: global function  

| Param |
| --- |
| data | 

