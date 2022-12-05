const express = require('express');
const app = express();
const { ErrorHandler } = require('./error-handler');
const bodyParser = require ('body-parser');
const { convert } = require ('./convert');
const { ErrorWrapper } = require ('./error-handler');

app.use(bodyParser.json());

// app.use(async( err, req, res, next) => {
//     console.log(err)
//     if(req != null){
//     // console.log(req , 14)
//     errorWrapper(req);
//     }
//     next();
// });

// const errorWrapper = fn =>(req, res, next) =>{
//     if(fn.constructor.name === 'AsyncFunction'){
//         fn(req,res).catch(err =>{
//             console.log('Async Error');
//             return ErrorHandler(err, req, res ,next);
//         })
//     }else {
//         console.log('sync error');
//         fn(req,res).catch(err =>{
//             return ErrorHandler(err, req, res ,next);
//         })
//    // return ErrorHandler(err, req, res ,next);
//     }
// }

app.get('/convert', ErrorWrapper(convert));


app.get('/uppercase', async(req, res) => {
    const { data } = req.query;
//   console.log(text,253);
    const upper = await data.toUpperCase();
    res.json(upper);
})

app.post('/api/getNumber', (req, res) => {
        const { userName , password } = req.body;
        if(userName === 'livi' && password === 'kaavian'){
            res.json({ msg: "user verified"})
            console.log("user Match");
        }res.json({msg : 'user not found '})
})


app.use(ErrorHandler)
app.use(ErrorWrapper)


// function ErrorHandler(req, res, next ){
//     console.log("hi");
// }

app.listen(8080, () => {
    console.log('server Running');
})
