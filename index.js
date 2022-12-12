const ErrorHandler = (err, req, res, next) => {
  if(err){
         console.log(err);
         console.log('in error handler');
        return res.status(500).json({error : 'Unexpected ERROR'});
  }
}

const ErrorWrapper = fn => (req, res, next) =>{
  if(fn.constructor.name === 'AsyncFunction'){
    fn(req,res).catch((err) =>{
       return ErrorHandler( err ,req ,res, next);
    })
  } else fn(req ,res)
}


module.exports = { ErrorHandler , ErrorWrapper};
