# dealers_and_vehicles

DealersAndVehicles - JavaScript client for dealers_and_vehicles
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install dealers_and_vehicles --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your dealers_and_vehicles from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('dealers_and_vehicles')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/dealers_and_vehicles
then install it via:

```shell
    npm install YOUR_USERNAME/dealers_and_vehicles --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var api = new DealersAndVehicles.DataSetApi()

var datasetId = "datasetId_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.dataSetGetCheat(datasetId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.coxauto-interview.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DealersAndVehicles.DataSetApi* | [**dataSetGetCheat**](docs/DataSetApi.md#dataSetGetCheat) | **GET** /api/{datasetId}/cheat | Get correct answer for dataset (cheat)
*DealersAndVehicles.DataSetApi* | [**dataSetGetDataSetId**](docs/DataSetApi.md#dataSetGetDataSetId) | **GET** /api/datasetId | Creates new dataset and returns its ID
*DealersAndVehicles.DataSetApi* | [**dataSetPostAnswer**](docs/DataSetApi.md#dataSetPostAnswer) | **POST** /api/{datasetId}/answer | Submit answer for dataset
*DealersAndVehicles.DealersApi* | [**dealersGetDealer**](docs/DealersApi.md#dealersGetDealer) | **GET** /api/{datasetId}/dealers/{dealerid} | Get information about a dealer
*DealersAndVehicles.VehiclesApi* | [**vehiclesGetIds**](docs/VehiclesApi.md#vehiclesGetIds) | **GET** /api/{datasetId}/vehicles | Get a list of all vehicleids in dataset
*DealersAndVehicles.VehiclesApi* | [**vehiclesGetVehicle**](docs/VehiclesApi.md#vehiclesGetVehicle) | **GET** /api/{datasetId}/vehicles/{vehicleid} | Get information about a vehicle


## Documentation for Models

 - [DealersAndVehicles.Answer](docs/Answer.md)
 - [DealersAndVehicles.AnswerResponse](docs/AnswerResponse.md)
 - [DealersAndVehicles.DatasetIdResponse](docs/DatasetIdResponse.md)
 - [DealersAndVehicles.DealerAnswer](docs/DealerAnswer.md)
 - [DealersAndVehicles.DealersResponse](docs/DealersResponse.md)
 - [DealersAndVehicles.VehicleAnswer](docs/VehicleAnswer.md)
 - [DealersAndVehicles.VehicleIdsResponse](docs/VehicleIdsResponse.md)
 - [DealersAndVehicles.VehicleResponse](docs/VehicleResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

