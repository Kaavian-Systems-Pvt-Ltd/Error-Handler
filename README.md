# Error-Handler

## Installation 

### step 1 : copy and paste the below line in package.json under dependencies (server) 
##### "@kaavian/error-handler": "github:Kaavian-Systems-Pvt-Ltd/Error-Handler"
### step 2 : npm install @kaavian/error-handler

### OR
### npm install https://github.com/Kaavian-Systems-Pvt-Ltd/Error-Handler.git

## Usage

### Server.js
```
const express = require('express');
const app = express();
const { ErrorHandler } = require('@kaavian/error-handler');
const bodyParser = require ('body-parser');
const { convert } = require ('./convert');

app.use(bodyParser.json());

// pass your function as a parameter of ErrorHandler function to catch the Error.

app.get('/uppercase', ErrorHandler((req, res ) => {
    const { data } = req.query;
    const upper = data.toUpperCase();
    res.json(upper);
}));

app.post('/api/getNumber', ErrorHandler(async(req, res) => {
    const { userName , password } = req.body;
    if(userName === 'livi' && password === 'kaavian'){
       return res.json({ msg: "user verified"})
    }
    return res.json({msg : 'user not found '})
}));

// this is how it looks when we split the function and using ErrorHandler.

app.get('/convert', ErrorHandler(convert));


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
