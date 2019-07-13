/**
 * DealersAndVehicles
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Answer', 'model/AnswerResponse', 'model/DatasetIdResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Answer'), require('../model/AnswerResponse'), require('../model/DatasetIdResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DealersAndVehicles) {
      root.DealersAndVehicles = {};
    }
    root.DealersAndVehicles.DataSetApi = factory(root.DealersAndVehicles.ApiClient, root.DealersAndVehicles.Answer, root.DealersAndVehicles.AnswerResponse, root.DealersAndVehicles.DatasetIdResponse);
  }
}(this, function(ApiClient, Answer, AnswerResponse, DatasetIdResponse) {
  'use strict';

  /**
   * DataSet service.
   * @module api/DataSetApi
   * @version v1
   */

  /**
   * Constructs a new DataSetApi. 
   * @alias module:api/DataSetApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the dataSetGetCheat operation.
     * @callback module:api/DataSetApi~dataSetGetCheatCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Answer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get correct answer for dataset (cheat)
     * @param {String} datasetId 
     * @param {module:api/DataSetApi~dataSetGetCheatCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Answer}
     */
    this.dataSetGetCheat = function(datasetId, callback) {
      var postBody = null;

      // verify the required parameter 'datasetId' is set
      if (datasetId === undefined || datasetId === null) {
        throw new Error("Missing the required parameter 'datasetId' when calling dataSetGetCheat");
      }


      var pathParams = {
        'datasetId': datasetId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = Answer;

      return this.apiClient.callApi(
        '/api/{datasetId}/cheat', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataSetGetDataSetId operation.
     * @callback module:api/DataSetApi~dataSetGetDataSetIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DatasetIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new dataset and returns its ID
     * @param {module:api/DataSetApi~dataSetGetDataSetIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DatasetIdResponse}
     */
    this.dataSetGetDataSetId = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = DatasetIdResponse;

      return this.apiClient.callApi(
        '/api/datasetId', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataSetPostAnswer operation.
     * @callback module:api/DataSetApi~dataSetPostAnswerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AnswerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit answer for dataset
     * @param {String} datasetId 
     * @param {module:model/Answer} answer 
     * @param {module:api/DataSetApi~dataSetPostAnswerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AnswerResponse}
     */
    this.dataSetPostAnswer = function(datasetId, answer, callback) {
      var postBody = answer;

      // verify the required parameter 'datasetId' is set
      if (datasetId === undefined || datasetId === null) {
        throw new Error("Missing the required parameter 'datasetId' when calling dataSetPostAnswer");
      }

      // verify the required parameter 'answer' is set
      if (answer === undefined || answer === null) {
        throw new Error("Missing the required parameter 'answer' when calling dataSetPostAnswer");
      }


      var pathParams = {
        'datasetId': datasetId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = AnswerResponse;

      return this.apiClient.callApi(
        '/api/{datasetId}/answer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
