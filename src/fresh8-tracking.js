import { validateFields, validateBets } from './validation';
import { sendRequest } from './requests';
/**
 * Fresh8Tracking class holds 1 function which validates and sends data
 */
export class Fresh8Tracking {
  /**
   * runs data through validation and and returns then runs sendRequest in a callback to send the data
   * @param data data to be validated and sent
   * @param callback
   * @returns {} returns the callback containing an error if data does
   * not validate or sendRequest if everything does validate
   */
  emitEvent (data, callback) {
    if (typeof callback !== 'function') {
      callback = () => {
      };
    }

    if (data === null) {
      return callback(new Error('Invalid parameter passed, `data` must be an object'));
    }

    if (!(data instanceof Object)) {
      return callback(new Error('Invalid parameter passed, `data` must be an object'));
    }

    var err;
    err = validateFields(data);
    if (err instanceof Error) {
      return callback(err);
    }

    err = validateBets(data);
    if (err instanceof Error) {
      return callback(err);
    }

    return callback(sendRequest(data));
  }
}
