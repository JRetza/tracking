import { sendRequest } from 'src/requests'
import { mockFetchResponse } from '../lib/mock-fetch'

describe('src/requests.js', () => {
  let data = {
    'appID': 1,
    'bets': [
      '131313_123456',
      '121212_234567',
    ],
    'vertical': true
  }

  describe('sendRequest', () => {
    let fetchStub
    beforeEach(() => {
      fetchStub = sinon.stub(window, 'fetch');
    })

    afterEach(() => {
      fetchStub.restore()
    })

    it('Should error on 400 status code', () => {
      fetchStub.returns(Promise.resolve(mockFetchResponse({}, 400)));
      return sendRequest(data).then((res) => {
      }).catch(err => {
        expect(err).to.equal('Request to fresh8 tracking failed with status code: 400')
      })
    })

    it('response status should be 200', () => {
      fetchStub.returns(Promise.resolve(mockFetchResponse({}, 200)));

      return sendRequest(data).then((res) => {
        expect(res.status).to.equal(200)
      })
    })
  })
});
