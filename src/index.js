import { validateFields, validateBets } from './validation'

export default class Fresh8Tracking {

  constructor (config) {
    this.config = config;
  }

  emitEvent (data, callback) {
    if (typeof callback !== 'function') {
      callback = function () {
      }
    }

    if (data == null) {
      return callback(new Error('Invalid parameter passed, `data` must be an object'))
    }

    if (!(data instanceof Object)) {
      return callback(new Error('Invalid parameter passed, `data` must be an object'))
    }

    var err
    err = validateFields(data)
    if (err != null) {
      return callback(err)
    }

    err = validateBets(data)
    if (err != null) {
      return callback(err)
    }

    callback(this.sendRequest(data))
  }

  sendRequest (data) {
    var d = new Date()
    var baseURL = 'https://heimdall.fresh8.co/track'
    var reqURL = baseURL + '?' +
      'appID=' + encodeURIComponent(data.appID) +
      '&vertical=' + encodeURIComponent(data.vertical) +
      '&timestamp=' + d.getTime()

    // Only apply values set in keys
    Object.keys(data).forEach(function (key) {
      if (key != 'appID' && key != 'vertical') {
        reqURL = reqURL + '&' + key + '=' + encodeURIComponent(data[key])
      }
    })

    var request = new XMLHttpRequest()
    request.withCredentials = true

    request.open('GET', reqURL)

    request.onload = function () {
      if (request.status > 202 || request.status < 200) {
        return new Error('Request to fresh8 tracking failed with status code ' + request.status)
      }
    }

    request.onerror = function () {
      return new Error('Request to fresh8 tracking failed')
    }

    request.send()
  }
}

