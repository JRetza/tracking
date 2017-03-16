import { Fresh8Tracking } from 'src/index';
import * as validation from 'src/validation';
import * as requests from 'src/requests';

describe('src/index.js', () => {
  let callback;
  let fresh8Tracking = new Fresh8Tracking();
  let validateFieldsStub;
  let validateBetsStub;
  let sendRequestStub;
  let data;

  beforeEach(() => {
    callback = sinon.spy();
    validateFieldsStub = sinon.stub(validation, 'validateFields');
    validateBetsStub = sinon.stub(validation, 'validateBets');
    sendRequestStub = sinon.stub(requests, 'sendRequest');
  });

  afterEach(() => {
    validateFieldsStub.restore();
    validateBetsStub.restore();
    sendRequestStub.restore();
  });

  describe('emitEvent', () => {
    it('Should call sendRequest if valid', () => {
      data = {
        'appID': 1,
        'bets': [
          '131313_12345 6',
          '121212_234567'
        ],
        'vertical': true
      };
      fresh8Tracking.emitEvent(data, callback);
      assert(callback.should.have.been.calledOnce);
      sendRequestStub.should.have.been.calledWith(data);
    });

    it('Should error if data is null', () => {
      data = null;
      var error = new Error();
      fresh8Tracking.emitEvent(data, callback);
      assert(callback.should.have.been.calledOnce);
      assert(callback.should.have.been.calledWith(error));
    });

    it('Should error if data is an array', () => {
      data = 'test';
      var error = new Error();
      fresh8Tracking.emitEvent(data, callback);
      assert(callback.should.have.been.calledOnce);
      assert(callback.should.have.been.calledWith(error));
    });

    it('Should error if data fields do not validate', () => {
      var error = new Error('data did not validate');
      validateFieldsStub.returns(error);
      data = {
        'appID': 1,
        'bets': [
          '131313_123456',
          '121212_234567'
        ]
      };
      fresh8Tracking.emitEvent(data, callback);
      assert(callback.should.have.been.calledOnce);
      assert(callback.should.have.been.calledWith(error));
    });

    it('Should error if bets do not validate', () => {
      var error = new Error('bets did not validate');
      validateBetsStub.returns(error);
      data = {
        'appID': 1,
        'bets': [
          '131313',
          '121212'
        ],
        'vertical': true
      };
      fresh8Tracking.emitEvent(data, callback);
      assert(callback.should.have.been.calledOnce);
      assert(callback.should.have.been.calledWith(error));
    });

    it('Should convert callback to a function if it is not', () => {
      data = {
        'appID': 1,
        'bets': [
          '131313_123456',
          '121212_234567'
        ],
        'vertical': true
      };
      fresh8Tracking.emitEvent(data, []);
      assert(sendRequestStub.should.have.been.calledWith(data));
    });
  });
});
