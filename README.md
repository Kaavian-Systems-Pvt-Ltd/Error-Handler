# Error-Handler

## Installation 

### step 1 : copy and paste the below line in package.json (server) 
##### "@kaavian/error-handler": "github:Kaavian-Systems-Pvt-Ltd/Error-Handler"
### step 2 : npm install @kaavian/error-handler

## Usage

### Server.js
```
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

app.post('/api/getNumber',ErrorWrapper(async(req, res, err, next) => {
    const { userName , password } = req.body;
    if(userName === 'livi' && password === 'kaavian'){
       return res.json({ msg: "user verified"})
    }
    return res.json({msg : 'user not found '})
}));

app.use(ErrorHandler);


app.listen(8080, () => {
    console.log('server Running');
})
```

### convert.js
```
const convert =  async(req, res, next) => {
    const { data } = req.query;
    res.json({ data: data.toUpperCase()})
}

module.exports = { convert };
```


