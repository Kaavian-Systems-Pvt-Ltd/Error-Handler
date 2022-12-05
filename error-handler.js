const ErrorHandler = (err, req, res, next) => {
           console.log('in error handler');
           return res.status(500).send('<h1>Unexpected ERROR</h1>');
           next();
 }

const ErrorWrapper = fn =>(req, res, next) =>{
  if(fn.constructor.name === 'AsyncFunction'){
      fn(req,res).catch(err =>{
          console.log('Async Error');
          return res.status(500).send('<h1>Unexpected ERROR</h1>');
      })
  }else {
      console.log('sync function');
      fn(req,res).catch(err =>{
        console.log('Async Error');
        return res.status(500).send('<h1>Unexpected ERROR</h1>');
    })
  }
}

module.exports = { ErrorWrapper , ErrorHandler };