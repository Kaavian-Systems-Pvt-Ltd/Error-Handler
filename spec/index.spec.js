const sinon = require('sinon');
const { ErrorHandler, ErrorWrapper } = require('../index');
//const ErrorHandling = require('../index')
const error = require('../index')

const sandbox = sinon.createSandbox();

describe('Error Handler', () => {
  afterEach(async () => {
    sandbox.restore();
  });

  it('testing error Handler', async () => {
    const mockError = new Error('Unexpected Error..')
    const mockRequest = null;
    const mockNext = null;
    const mockResponse = {
      json: sandbox.spy()
    }
    ErrorHandler(mockError, mockRequest, mockResponse, mockNext);
    expect(mockResponse.json.calledOnce).toEqual(true)
  })

  it('testing Error wrapper2', async () => {
    const mockRequest = null;
    const mockNext = null;
    const mockResponse = {
      json: sandbox.spy(() => {
        res.json({ error: 'Unexpected Error Occured' });
      })
    }
    const value = ErrorWrapper(async (req, res) => (mockRequest, mockResponse, mockNext) => {
      mockResponse;
    });

    const val = value(mockRequest, mockResponse);

    expect(val).toBe(true);
  })

  it('Error..', async () => {
    const mockError = new Error('Error..')
    const fn = async(req, res, mockError, next) => {};
    // const userRegisterStub = sandbox.stub(error, 'ErrorWrapper').returns({ error: "Unexpected Error" });
    const mockRequest = null
    const mockResponse = { json: { error: "Unexpected Error" }};
    error.ErrorWrapper(fn);
    const value = fn(mockRequest, mockResponse).catch((mockError)=>{
      mockResponse
    })
    expect(value).toEqual(true);
  });

  it('Error..', async () => {
    const fn = (req, res, mockError, next) => {};
    // const userRegisterStub = sandbox.stub(error, 'ErrorWrapper').returns({ error: "Unexpected Error" });
    const mockRequest = null
    const mockResponse = null;
    sandbox.stub(error, 'ErrorWrapper').returns(fn);
    const value = ErrorWrapper(fn);
    expect(value).toEqual(true);
  });

})
// it('User Register Success Response..', async () => {
//     const userRegisterStub = sandbox.stub(ErrorWrapper, 'ErrorWrapper').returns(true);
//     const mockRequest = null;
//     const mockResponse = { json: userRegisterStub };
//     const value = await ErrorWrapper(async(req,res)=>(mockRequest, mockResponse, mockNext) => {
//         mockResponse;
//     });

//     const val = await value(mockRequest, mockResponse);

//     expect(val).toEqual({ error: 'Unexpected Error Occured' });
//   });


