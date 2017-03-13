import { validateBets, validateFields } from 'src/validation'

describe('src/validation.js', () => {
  describe('validateBets', () => {
    it('Should return true when bets are formatted right', () => {
      var data = {
        'appID': 1,
        'bets': [
          '131313_123456',
          '121212_234567',
        ]
      }
      expect(validateBets(data)).to.equal.true
    })
    it('Should return true when bets are formatted right', () => {
      var data = {
        'appID': 1,
      }
      expect(validateBets(data)).to.be.an('error')
    })
    it('Should return an error when bets is not an array', () => {
      let data = {
        'appID': 1,
        'bets': 3
      }
      expect(validateBets(data)).to.be.an('error')
    })
    it('Should return an error when bets data not correct', () => {
      let data = {
        'appID': 1,
        'bets': ['1234', '2345', '3456']
      }
      expect(validateBets(data)).to.be.an('error')
    })
  })
  describe('validateFields', () => {
    it('Should return true when valid data is passed', () => {
      let data = {
        'appID': 1,
        'vertical': true,
        'bets': [1, 2, 3]
      }
      expect(validateFields(data)).to.equal.true
    })

    it('Should return an error when required fields aren\'t present', () => {
      var data = {
        'appID': 1,
        'bets': [1, 2, 3]
      }
      expect(validateFields(data)).to.be.an('error')
    })
    it('Should return an error when unexpected field is passed', () => {
      var data = {
        'appID': 1,
        'vertical': true,
        'betsa': [1, 2, 3]
      }
      expect(validateFields(data)).to.be.an('error')
    })
    it('Should return an error when not given an object', () => {
      var data = []
      expect(validateFields(data)).to.be.an('error')
    })
  })

});
