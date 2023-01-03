const express = require('express');
const app = express();
const { ErrorWrapper, ErrorHandler } = require('@kaavian/error-handler');
const bodyParser = require ('body-parser');
const { convert } = require ('./convert');

app.use(bodyParser.json());


// sync function
// if error occured in syncronous function the ErrorHandler middleware(in the bottom) will handle the error. No need for try catch..

app.get('/uppercase', (req, res ) => {
    const { data } = req.query;
    const upper = data.toUpperCase();
    res.json(upper);

})

// Async Function 
// for async function we should wrap the entire function in ErrorWrapper function like given below

app.post('/api/getNumber',ErrorWrapper(async(req, res) => {
    const { userName , password } = req.body;
    if(userName === 'livi' && password === 'kaavian'){
       return res.json({ msg: "user verified"})
    }
    return res.json({msg : 'user not found '})
}));

// this is how it looks when we split the function and using ErrorWrapper.

app.get('/convert', ErrorWrapper(convert));


//IMPORTANT NOTE
//error handler middleware should located below the final route 

app.use(ErrorHandler);


app.listen(8080, () => {
    console.log('server Running');
})
