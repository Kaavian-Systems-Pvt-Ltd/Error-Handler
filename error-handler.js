const ErrorHandler = (err, req, res, next) => {
  if(err){
         console.log('in error handler');
         res.status(500).json({error : 'Unexpected ERROR'});
  }
 }

const ErrorWrapper = (req, res, next) =>{
  cons
  if(fn.constructor.name === 'AsyncFunction'){
    console.log("ansfmeciqnv")
      fn(req,res).catch(err =>{
          console.log('Async Error');
          return res.status(500).send('<h1>Unexpected ERROR</h1>');
      })
  } else {
      console.log('sync function');
      fn(req,res).catch(err =>{
          console.log('sync Error');
          return res.status(500).send('<h1>Unexpected ERROR</h1>');
    })
  }
}

const asyncUtil = fn =>
function asyncUtilWrap(...args) {
  console.log('123');
  const fnReturn = fn(...args)
  const next = args[args.length-1]
  return Promise.resolve(fnReturn).catch(next)
}

module.exports = { ErrorHandler , ErrorWrapper, asyncUtil };
