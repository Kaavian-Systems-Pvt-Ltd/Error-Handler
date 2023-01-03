const express = require('express');
const app = express();
const { ErrorWrapper, ErrorHandler } = require('./index');
const bodyParser = require ('body-parser');
const { convert } = require ('./convert');

app.use(bodyParser.json());

app.get('/convert', ErrorWrapper(convert));


app.get('/uppercase', (req, res ) => {
    const { data } = req.query;
    const upper = data.toUpperCase();
    res.json(upper);

})

app.post('/api/getNumber',async(req, res, err, next) => {
    const { userName , password } = req.body;
    console.log( userName ,password , 569);
    if(userName === 'livi' && password === 'kaavian'){
       return res.json({ msg: "user verified"})
    }
    return res.json({msg : 'user not found '})
})

app.use(ErrorHandler);


app.listen(8080, () => {
    console.log('server Running');
})
