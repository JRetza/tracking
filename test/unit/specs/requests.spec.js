import { sendRequest } from 'src/requests'
describe('src/requests.js', () => {
  let xhr
  let requests

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) {
      requests.push(req);
    };
  })

  afterEach(() => {
    xhr.restore();
  })

  describe('sendRequest', () => {
    it('Should error on 199 status code', () => {
      let data = {
        'appID': 1,
        'bets': [
          '131313_123456',
          '121212_234567',
        ],
        'vertical': true
      }
      let ret = sendRequest(data)
      // TODO: respond with 199 and get error
    })
    it('Should error on 203 status code', () => {
      let data = {
        'appID': 1,
        'bets': [
          '131313_123456',
          '121212_234567',
        ],
        'vertical': true
      }
      sendRequest(data)
    })
  })
});
