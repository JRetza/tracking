import 'whatwg-fetch';
import { checkStatusCode } from './util';
/**
 * makes the request to the server using fetch
 * @param data to be sent
 * @returns {*|Promise.<TResult>}
 */
export function sendRequest (data) {
  let reqURL = `${URL}/track
?appID=${encodeURIComponent(data.appID)}
  &vertical=${encodeURIComponent(data.vertical)}
  &timestamp=${new Date().getTime()}`;

  // Only apply values set in keys
  Object.keys(data).forEach(function (key) {
    if (key !== 'appID' && key !== 'vertical') {
      reqURL = `${reqURL}&${key}=${encodeURIComponent(data[key])}`;
    }
  });
  return fetch(reqURL, {
    credentials: 'include'
  })
    .then(checkStatusCode);
}
