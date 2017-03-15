/**
 * Checks the stats code on a response and rejects the promise chain if
 * less than 200 or greater than 300.
 * @param  {Object} response is the fetch response object
 * @return {(Promise.reject|Object)} a rejected promise or the reponse object
 */
export function checkStatusCode (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return Promise.reject(new Error('Request to fresh8 tracking failed with status code: ' + response.status));
}
