const express = require('express');
const app = express();
const errorHandler = require ('api-error-handler');
const { ErrorWrapper ,ErrorHandler } = require('./error-handler');
const bodyParser = require ('body-parser');
const cors = require('cors');
const { convert } = require ('./convert');

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }))


app.get('/convert', ErrorWrapper(convert));

// app.get('/convert', convert )

app.get('/uppercase', (req, res ) => {
    const { data } = req.query;
//   console.log(text,253);
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



app.use(errorHandler());


app.listen(8080, () => {
    console.log('server Running');
})


