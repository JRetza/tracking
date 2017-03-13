import { validateFields, validateBets } from './validation'
import { sendRequest } from './requests'

export default class Fresh8Tracking {

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
    if (err instanceof Error) {
      return callback(err)
    }

    err = validateBets(data)
    if (err instanceof Error) {
      return callback(err)
    }

    callback(sendRequest(data))
  }
}

